"""Copy isolated inputs to a NEW destination; never overwrite an existing rehearsal."""
from pathlib import Path
import argparse,shutil,json,hashlib
parser=argparse.ArgumentParser();parser.add_argument('destination',type=Path);a=parser.parse_args()
source=Path(__file__).resolve().parents[1]/'demo';dest=a.destination.expanduser().resolve()
if dest.exists():raise SystemExit('Choose a new destination; existing rehearsals are preserved.')
dest.mkdir(parents=True)
for condition in ['raw-brief','operating-packet']:
 folder=dest/condition;folder.mkdir();shutil.copy2(source/'source/venture-brief.md',folder/'venture-brief.md')
 if condition=='operating-packet':
  shutil.copytree(source/'context',folder/'context')
  (folder/'AGENTS.md').write_text('Read venture-brief.md as the scenario source, then context/README.md, context/PRD.md, context/SOP.md, and context/MEMORY.md. Apply this operating packet to the requested work. Preserve uncertainty and authority. Save outputs and handoff locally.\n')
manifest={'source_sha256':hashlib.sha256((source/'source/venture-brief.md').read_bytes()).hexdigest(),'conditions':['raw-brief','operating-packet'],'status':'Inputs only. No agent run or score exists.','warning':'Verify account/global memory and parent directory instructions before each run.'}
(dest/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print('Prepared two conditions with identical source briefs. Verify isolation before running.')
