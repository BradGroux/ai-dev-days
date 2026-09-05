#!/usr/bin/env node
import {execFileSync} from 'node:child_process'
const repo='BradGroux/ai-dev-days'
const tag=process.argv[2]
const run=(cmd,args)=>execFileSync(cmd,args,{encoding:'utf8'}).trim()
const api=endpoint=>JSON.parse(run('gh',['api',`repos/${repo}/${endpoint}`]))
try {
 if(!/^v(?:\d{4}\.\d{2}\.\d{2}(?:\.[1-9]\d*)?|1\.[01]\.0)$/.test(tag??'')) throw new Error('Supply a calendar tag, or historical v1.0.0/v1.1.0')
 if(run('git',['status','--porcelain'])) throw new Error('Release verification requires a clean tree')
 const ref=api(`git/ref/tags/${tag}`)
 if(ref.object.type!=='tag') throw new Error('Remote tag is not annotated')
 const object=api(`git/tags/${ref.object.sha}`)
 if(object.object.type!=='commit'||object.tag!==tag) throw new Error('Unexpected annotated tag target/name')
 const local=run('git',['rev-parse',tag]);const commit=run('git',['rev-parse',`${tag}^{}`])
 const advertised=run('git',['ls-remote',`https://github.com/${repo}.git`,`refs/tags/${tag}`,`refs/tags/${tag}^{}`])
 if(local!==ref.object.sha||commit!==object.object.sha||!advertised.includes(`${local}\trefs/tags/${tag}\n`)||!advertised.includes(`${commit}\trefs/tags/${tag}^{}`)) throw new Error('Local/API/remote tag identity mismatch; preserve history and inspect the documented legacy limit')
 const release=api(`releases/tags/${tag}`)
 if(release.author.login!=='BradGroux'||release.draft||release.prerelease||release.tag_name!==tag||release.published_at===null) throw new Error('Unexpected release author/state')
 if(release.performed_via_github_app) throw new Error('Unexpected app attribution')
 const notes=run('git',['show',`${commit}:docs/releases/${tag}.md`])
 const normalize=value=>value.replaceAll('\r\n','\n').trimEnd()
 if(normalize(notes)!==normalize(release.body)) throw new Error('Published body differs from committed release notes')
 if(tag.startsWith('v20')) {
  if(release.immutable!==true) throw new Error('New release is not immutable on GitHub')
  const edition=run('git',['show',`${commit}:VERSION`])
  if(`v${edition}`!==tag||release.published_at.slice(0,10)!==edition.slice(0,10).replaceAll('.','-')) throw new Error('Publication UTC date/edition mismatch')
  if(release.assets.length!==0) throw new Error('Unexpected assets: this edition uses repository-contained artifacts only')
 }
 console.log(JSON.stringify({url:release.html_url,author:release.author.login,tag,tagObject:local,commit,published:release.published_at,immutable:release.immutable??null,assets:release.assets.map(a=>({name:a.name,size:a.size})),body:'matches committed notes'},null,2))
} catch(error) { console.error(error.message);process.exit(1) }
