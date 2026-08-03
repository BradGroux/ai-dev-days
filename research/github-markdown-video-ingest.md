# Video ingest: Getting started with Markdown on GitHub

Source: https://www.youtube.com/watch?v=LxeclcePg-c  
Title: Getting started with Markdown on GitHub  
Channel: GitHub  
Published: 20260427  
Duration: 357 seconds

## Source note

Optional prep/follow-up resource for attendees. Thank you to the GitHub team for making approachable Markdown learning material for new builders.

## Why this matters for the AI Dev Days OpenClaw track

This is a short, beginner-friendly Markdown primer from GitHub. It maps cleanly
into the first hour of the AI Dev Days OpenClaw track because Markdown is the
shared surface where humans, models, agents, GitHub, and Obsidian can all
cooperate.

The teaching angle should not be “Markdown as formatting trivia.” The stronger angle is:

> Markdown is how we make thinking legible to both people and agents.

That gives attendees a practical bridge between GitHub READMEs, issues, PRs, agent memory files, prompt context, Obsidian notes, and workshop labs.

## Core content from the video

### 1. Markdown is lightweight formatting for plain text

Markdown lets people write readable plain text that can also render as structured documentation. GitHub supports Markdown in repository READMEs, issues, pull requests, comments, and project docs.

Curriculum use: position Markdown as a low-friction operating layer. Attendees do not need a complex app to start building useful agent context. A plain `.md` file is enough.

### 2. READMEs are the front door to a project

The video emphasizes that a clean README changes what happens when someone first lands on a repository. It helps people understand what the project is, why it matters, and how to get started.

Curriculum use: tie this to both GitHub and agents. A README is also useful context for an agent because it states intent, structure, commands, and constraints.

### 3. Basic Markdown syntax

The practical syntax shown includes:

- Headings with `#`, `##`, `###`
- Bold with `**bold**`
- Italic with `*italic*`
- Links with `[label](url)`
- Images with `![alt text](url-or-path)`
- Ordered lists with `1.` / `2.` / `3.`
- Unordered lists with `-`
- Blockquotes with `>`
- Inline code with backticks
- Code blocks with triple backticks
- Task lists with `- [ ]` and `- [x]`
- Tables with pipes and header separators

Curriculum use: teach only the syntax needed for the first working loop. Do not turn this into a Markdown lecture. The minimum viable set is headings, bullets, links, code blocks, task lists, and maybe tables.

### 4. GitHub has Markdown shortcuts and previews

The video shows that GitHub helps writers use Markdown through toolbar buttons and preview rendering. Writers can use buttons for common syntax and preview the result before saving.

Curriculum use: reduce fear for non-developers. They do not need to memorize everything. The habit that matters is writing structured notes and previewing before publishing.

### 5. Markdown makes collaboration clearer

Markdown improves issues, pull requests, docs, and project communication. The video frames formatting as a way to make work easier for others to understand.

Curriculum use: expand this to human-agent collaboration. Clear Markdown gives models better context, creates easier review points, and makes memory reusable.

## First-hour teaching recommendations

### Recommended framing

Use this sequence:

1. Models do not “think” like humans; they predict and transform text using context.
2. Agents are more useful when their context is structured, explicit, and durable.
3. Markdown is a simple structure that both humans and agents can read.
4. Obsidian makes Markdown feel like a personal knowledge base.
5. GitHub makes Markdown feel like project documentation.
6. OpenClaw can use Markdown files as memory, instructions, plans, and task context.

### Recommended demo flow

1. Show a messy plain-text note.
2. Convert it into Markdown with headings, bullets, tasks, and code blocks.
3. Show how the rendered version is easier for a person to scan.
4. Explain that the raw Markdown is also easier for a model/agent to parse.
5. Save it as `memory/project.md` or `notes/workshop-goal.md`.
6. Ask OpenClaw to read/summarize/use it.
7. Open the same file in Obsidian and show backlinks/graph potential if available.
8. Commit or show it in GitHub so attendees see the same text power docs, memory, and collaboration.

### Suggested “Markdown memory” lab

Have attendees create a file named `workshop-memory.md`:

```markdown
# My OpenClaw Workshop Memory

## Goal
I want to build an agent that helps me with ...

## Context
- My role:
- My project:
- My biggest friction point:

## Constraints
- Time:
- Tools:
- Data I should not expose:

## First agent idea
- [ ] Agent name:
- [ ] Job:
- [ ] First useful task:

## Prompts that worked
```text
Paste one useful prompt here.
```
```

Then ask OpenClaw:

```text
Read my workshop-memory.md file and help me turn it into a first agent plan. Ask me three questions before you propose the plan.
```

## Curriculum updates to make

1. Add a Markdown/Obsidian first-hour module or submodule.
2. Update first-success lab to include a Markdown memory file before or immediately after the first OpenClaw response.
3. Add a short explanation that Markdown is useful because it is human-readable and agent-readable.
4. Add a GitHub README/issue/PR Markdown tie-in for attendees who already know GitHub.
5. Add an Obsidian tie-in for knowledge workers and non-developers.
6. Include a privacy warning: do not put secrets, private data, client data, or sensitive personal info into public repos or shared notes.
7. Keep syntax scope tight. The goal is structured thinking, not Markdown mastery.

## Qualifying questions for Brad

1. Should the first-hour Markdown segment be a 10-minute concept/demo or a 20-minute hands-on lab?
2. Do you want Obsidian installed/configured live, or shown as an optional tool after the Markdown concept lands?
3. Should attendees create Markdown memory inside the OpenClaw workspace, inside a GitHub repo, or in a local notes folder that can later be opened in Obsidian?
4. Do you want the first Markdown artifact to be personal memory, project README, or agent instructions?
5. Should we include a public-repo safety warning slide/checkpoint before GitHub is introduced?
6. Should task lists become the bridge into agents: “agents turn checklists into work plans”?
7. Do you want to reference GitHub’s video directly as optional prep/follow-up, or keep the curriculum self-contained?
8. Should the Beaver Badges project include a `README.md` improvement task as one of the first agent-team exercises?

## Raw transcript

```text
Kedasha: Today, I’m going to teach you
everything you need to know
to get started with Markdown.
Markdown is an essential skill
that will transform how you write.
By the end of this video,
you’ll understand all the essential
Markdown concepts you need
to write a great README,
format issues and pull requests,
and make your project easier for others to explore.
Hey, I’m Kedasha and I’m so excited
that you’re here with me today.
I have my friend, Emily, here with me
to tell us about why Markdown is worth learning,
especially as you’re getting started on GitHub.
Emily: Markdown is a lightweight language
for formatting plain text.
You can use Markdown syntax,
along with some additional HTML tags,
to format your writing on GitHub,
in places like repository READMEs,
and comments on pull requests and issues.
Markdown allows you to create
clear, readable documentation.
Having a clean README in your project,
or a well-formatted issue,
can make a huge difference when someone lands
on your content for the first time.
And the best part is, once you get the syntax down,
you’ll use it in almost every project you work on.
The most common place you will encounter
Markdown is your repository’s README file,
but Markdown goes way beyond that.
You’ll use Markdown in issues, pull requests,
discussions, and even wikis.
Anytime you write or communicate on GitHub,
Markdown is there, behind the scenes,
helping your text look clean and consistent.
Markdown even extends beyond GitHub
to modern note-taking apps,
blog platforms, and documentation tools.
So, let’s take a look at the core Markdown features
that you’ll use the most.
Let’s start with text formatting.
First up, headers.
These are your titles and section names.
You create them by adding a hash ‘#’
in front of your text.
One for a main header,
two for a sub header, and so on.
If you want to emphasize your text,
you can use the asterisk symbol ‘*’
to create italic or bold text.
A single asterisk for italics text,
two asterisks is for bold text,
and three asterisks for both bold and italics text.
You can emphasize characters within a string
or multiple strings within a line of text.
Sometimes you may want to quote important text,
such as text from your favorite
GitHub content creator.
To do this, add the greater-than symbol ‘>’
as the first character in your line of text.
If you would like to quote something
that spans multiple lines,
you will need to add a greater-than symbol ‘>’
at the start of each individual line.
Now, let’s get into something
a little more involved...lists.
Lists are a common way to express
your steps and procedures
in an ordered and unordered manner.
To create an ordered list,
number each element in the list:
one, two, three, etc.,
followed by a period after each number.
This is clear to read,
but what if you want to add an element
between items two and three?
Markdown interpreters allow you
to order your items with any number,
and it will automatically interpret it
as an ordered list from first to last.
For unordered lists,
start a line with either
a hyphen ‘-’, asterisk ‘*’, or a plus sign ‘+’.
Markdown will render any of these characters
as the start of an unordered list.
If you would like to create new nested lists,
whether unordered or ordered,
indent four spaces to start a new indented list.
And then, when you’re done with the list,
hit enter twice to go back to plain text.
Kedasha: Check out the GitHub docs
for a cheat sheet on formatting Markdown.
You can also start practicing
your Markdown skills today
by visiting this repository.
You’ll learn to use Markdown to add lists,
images, and links in a GitHub comment or text file.
Go to gh.io/gfb-markdown to learn more.
Now, let’s take a look at how to format
code snippets using Markdown.
Emily: Sometimes we may want to display
a snippet of code in our Markdown,
such as an example, steps in a procedure,
or maybe as part
of our project’s installation process.
Many Markdown interpreters
render your code snippets
with formatting and syntax highlighting.
You can denote code in Markdown
by surrounding it with the backtick character ‘`’.
If you have code that spans multiple lines,
you can use three backtick characters
to create a code block.
Any characters, including spaces and new lines
between these triple backticks,
will be rendered as code.
Finally, let’s learn how to spice up
our Markdown files.
Links allow us to point people
to helpful resources, documentation,
or other pages in your project.
They’re written using brackets ‘[]’
and parentheses ‘()’.
The text you want to display goes in the brackets,
followed immediately by the URL in the parentheses.
This keeps your writing clean and easy to follow.
Images work almost the same way,
but with one small difference.
You add an exclamation point ‘!’ at the beginning.
This is perfect for adding screenshots, diagrams,
or even a project logo to your README.
And the nice thing is, on GitHub,
you can even drag and drop an image
into an issue or a pull request,
and it will automatically generate
the right Markdown for you.
So, whether you’re linking out to a tutorial
or showing off a screenshot,
links and images help you add that extra bit
of personality and clarity to your Markdown.
And that’s it!
You now know the basics of Markdown,
including what it is, why it matters,
where you can use it,
and how to start writing it with confidence.
Kedasha: Thanks so much, Emily, for showing us
how to use Markdown effectively.
With just a few techniques,
you can create clean, readable documentation
that makes your GitHub projects stand out.
Whether you’re building a README,
opening an issue, or writing project notes,
Markdown is going to be
one of your most-used tools.
I hope you found this video helpful.
Remember to subscribe
to GitHub’s YouTube channel
so you don’t miss any of our future uploads,
and share with a dev friend
who could use this knowledge.
Happy coding!

```
