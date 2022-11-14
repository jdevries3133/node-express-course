# Task Manager API Extension Assignment

This assignment is an extension on the existing Code the Dream Node.JS course.
As we continue to iterate on and improve the Express & Node.JS curriculum,
we want to experiment with adding more open-ended creative assignments.

## Overview & Rationale

Creativity is hard. However, it is also the most [fruitful form of learning
that you can engage in.](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy) To
that end, we invite you to dive into this assignment with an open mind, and a
willingness to make mistakes, get lost, and be confused. Who knows what will be
created when you apply everything you've learned so far to make something
unique!

Being creative with programming has enormous importance to your confidence as a
developer. When you implement an idea that you formed, you can be certain that
you have the capability to apply what you've learned to new problems, whether
that be in a personal project, or at a workplace! Additionally, tech recruiters
recognize popular beginner programming projects. Although a portfolio of
completely unique projects will put you in the strongest possible position when
applying to jobs, a portfolio of typical beginner programs _all of which
contain unique self-directed variations_ will stand out. For example, making a
tasks API for nurses might be as simple as adding three of four features on top
of the basic tasks API you've already built.

## Choosing What to Build


Choosing _what_ to build is one of the hardest parts of software development,
followed only by how to build it! Professional software developers are
sometimes consulted for what to build, but entirely responsible for how to best
build it. For the assignment, you must choose the feature, and therefore also
can choose the feature's scope. Scope means how complex a feature is. This can
be tricky, because you have much more overall experience as software users than
as software creators. Often, the relationship between the perceived complexity
of a feature, versus the actual complexity to program it can be really
deceiving, so you have to be careful when choosing what to implement!
Especially considering that you want to choose a feature that can be finished
in just one week, so you'll need to choose something _quite_ small in scope. To
illustrate this imbalance a bit further, let's dive into two examples.

- **Time Zones:** seems pretty simple; add a few hours here, subtract a few
  hours there. Then again, if you have a big computer system, and international
  timezone laws change somewhere in the world every few months, it's quite a
  chore to keep that working. What if you're storing dates? You'd need to
  migrate existing data if timezones change. And, uh, oh, what about daylight
  savings?? [Here's an interesting video on the
  topic!](https://www.youtube.com/watch?v=-5wpm-gesOY)
- **UI Redesign:** Totally changing the appearance of an app (without
  changing the underlying data) seems like a big job, but in some cases you can
  dramatically change the look and feel of a whole website just by changing a
  bit of CSS. Of course, functionality changes could be a bit more expensive,
  but reworking the appearance of a website isn't an enormous technical job
  although it has a huge impact on the user.

So, time zones look simple but are actually quite tricky, while changing the
look of a website seems complicated but _(sometimes)_ is actually pretty
simple!

With this mismatch between actual and perceived complexity in mind, here's a
brainstorm of some Tasks API features that are easy, moderately difficult, and
probably too difficult, considering the typical experience of CTD students, and
the important constraint that this needs to be finished by the end of the week!

### Easy Scope

<!--
  NOTE (John): I want to pair this down the the best 3
  examples, so that we aren't giving away _every possible_ feature
-->

- require that every task start with a capital letter
- log the client's IP address with every request
- create a default task name, making the name optional for creation
- improve error handling; submitting a task with an empty name should cause a
  `400` error, and a helpful validation message should be provided by the API
  as a response

### Moderate Scope

<!--
  NOTE (John): I want to pair this down the the best 3
  examples, so that we aren't giving away _every possible_ feature
-->

- require that task names "Use Title Case" (every word starts with a capital
  letter)
- filter tasks by name via a [query parameter](https://stackabuse.com/get-query-strings-and-parameters-in-express-js/)
- add an endpoint for only uncompleted tasks
- add an endpoint for only completed tasks
- set a total limit on the number of tasks that can be created, and reject any
  attempt to create new tasks if the limit has been reached
- append text to a log file every time a task is created, updated, or deleted
  for auditing
- change "completion" from a boolean type to an optional date type, and record
  the date and time that a task is marked completed (if the `date` field is
  missing, the item is considered incomplete)
- add one property to each task, like a text description
- implement soft deletion by marking tasks as "deleted" internally, and
  keeping them in the database

### Domain-Driven Features

Another option is to take the existing Tasks API, and tailor it towards a
specific domain. For example

- adding "Due Date" to every task, making it a School Tasks API
- adding an "equipment needed list" (text field) to every task, making it a
  Nurse / Carpenter / DJ API
- make it possible to archive tasks without deleting them forever (regardless
  of whether it's complete), making it a Lawyer API, since they might not want
  to (or can't) delete information

Think about the communities you care about; what features would they need from
a task list?

### Silly Features

We can still learn through play as grown-ups! Here are some ideas:

- make your API reverse the name every time you update a task.
- make a magic API that randomly marks items completed a certain percent of the
  time
- add a silly response message after tasks are created.

For bonus points, program the silly feature such that it is only enabled if
your computer's Date is set to April 1st!

### Beware of Feature Creep

[Feature creep](https://en.wikipedia.org/wiki/Feature_creep) is the tendency to
always add more. It usually goes something like this:

- I'm going to add a "description" text field to the Task API
- Hm, I should probably also implement that on the frontend
- Hm, I should probably also have a list endpoint that doesn't include the
  description, for clients that want to fetch less data & optimize for speed
- Hm, I can probably also just add a query parameter to the regular GET
  endpoint to allow clients to toggle the `includeDescription` parameter
- Hm, I should also add some basic rich text functionality to the description,
  so users can write bold or italic
- Hm, I should probably also allow different font sizes
- Hm, I could also support markdown syntax for more techy users

Notice that every bullet point starting with "hm" was not necessary! You can
implement just the first thing, and then **STOP!** The job you initially set
out to do is done. Yes, it's unfortunate that the feature only exists in the
API and web users can't see or write task descriptions, but that's OK. We can
add that feature later if we want.

Even if you start with a good and narrowly focused feature, it is likely that
you'll encounter unrelated additional features that you can build "while you're
in there." Resist this temptation! Complete the feature you initially set out
to build, and then stop. You can feel free to use the Tasks API to keep track
of the features you want to build next, I suppose 😄

## The Assignment

Your assignment is to add **one feature** to the tasks API project. Use the
above brainstorming as a _guide_; do not implement a brainstorming feature
exactly as specified!! Lean on your reviewers and mentors while you complete
this task, it's expected that you'll need extra support, and that's what we are
here for!

<!-- Note (John): this procedure needs to be fleshed out, probably with
feedback from Mary Alice -->
If you need guidance along the way, the best thing you can do is to
start a pull request with a partially complete implementation if you have
questions, and ask your reviewer for help directly in the pull request branch,
then add new commits as you go. Note that you need to submit the assignment
through AirTable to get a reviewer assigned to your PR; you should add a note
that the work is partially complete, and you want to start working with a
reviewer for support.
