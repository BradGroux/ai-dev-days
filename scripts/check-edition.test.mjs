import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {validateEdition} from './check-edition.mjs'
function fixture(edition) {
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'edition-test-'))
 const write=(name,text)=>{fs.mkdirSync(path.dirname(path.join(root,name)),{recursive:true});fs.writeFileSync(path.join(root,name),text)}
 write('VERSION',edition+'\n');write('CITATION.cff',`version: "${edition}"\ndate-released: ${edition.slice(0,10).replaceAll('.','-')}\n`)
 for(const file of ['CHARTER.md','GOVERNANCE.md','CONTRIBUTING.md','docs/research-and-education-method.md']) write(file,`**Status:** Edition ${edition}\nCommons v2026.09.05 8868a248457dd7b663563beb243c5ebcbb8ac360`)
 write('CHANGELOG.md',`## [${edition}] - ${edition.slice(0,10).replaceAll('.','-')}`)
 write(`docs/releases/v${edition}.md`,`# AI Dev Days v${edition}\n`);write('docs/releases/README.md',`(v${edition}.md)`)
 return {root,write}
}
test('future editions and same-day corrections validate independently of package versions',()=>{
 for(const edition of ['2026.09.05','2026.09.05.1','2028.02.29']) {const {root}=fixture(edition);try{assert.equal(validateEdition(root),edition)}finally{fs.rmSync(root,{recursive:true})}}
})
test('invalid dates, suffixes and stale active fields fail',()=>{
 for(const edition of ['2026.02.30','2026.13.01','2026.9.05','2026.09.05.0','1.2.0']) {const {root}=fixture(edition);try{assert.throws(()=>validateEdition(root))}finally{fs.rmSync(root,{recursive:true})}}
 const {root,write}=fixture('2026.09.05');try{write('GOVERNANCE.md','**Status:** Edition 1.1.0\n');assert.throws(()=>validateEdition(root),/Stale status/)}finally{fs.rmSync(root,{recursive:true})}
})
