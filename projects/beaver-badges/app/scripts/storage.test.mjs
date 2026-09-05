import test from 'node:test'
import assert from 'node:assert/strict'
import { loadSavedLocations, saveLocations, clearSavedLocations, resetLocations } from '../src/storage.ts'
const seed = [{id:'a', name:'A', visited:false}, {id:'b', name:'B', visited:false}]
test('storage denial and quota failures preserve usable in-memory progress', () => {
  globalThis.window = {get localStorage() {throw new Error('denied')}}
  assert.deepEqual(loadSavedLocations(seed), seed)
  assert.equal(saveLocations(seed), false)
  assert.equal(clearSavedLocations(), false)
  globalThis.window = {localStorage:{setItem(){throw new Error('quota')},removeItem(){throw new Error('denied')}}}
  assert.equal(saveLocations(seed), false)
  assert.equal(clearSavedLocations(), false)
  assert.deepEqual(resetLocations([{...seed[0],visited:true,visitedAt:'2026-09-05'}]), [seed[0]])
})
test('malformed records cannot become visits or renderable dates; valid neighbors survive', () => {
  for (const bad of [null, {id:'a',visited:'false'}, {id:'a',visited:true,visitedAt:{}}, {id:'a',visited:true,visitedAt:'2026-02-30'}]) {
    globalThis.window = {localStorage:{getItem:()=>JSON.stringify({locations:[bad,{id:'b',visited:true,visitedAt:'2026-09-05'}]})}}
    const result = loadSavedLocations(seed)
    assert.equal(result[0].visited, false)
    assert.equal(result[1].visited, true)
    assert.equal(result[1].visitedAt, '2026-09-05')
  }
})
test('valid progress round trips and reset clears stored data', () => {
  let raw
  globalThis.window = {localStorage:{getItem:()=>raw,setItem:(_,v)=>{raw=v},removeItem:()=>{raw=null}}}
  const visited=[{...seed[0],visited:true,visitedAt:'2026-09-05'},seed[1]]
  assert.equal(saveLocations(visited),true)
  assert.deepEqual(JSON.parse(JSON.stringify(loadSavedLocations(seed))),visited)
  assert.equal(clearSavedLocations(),true)
  assert.deepEqual(loadSavedLocations(seed),seed)
})
