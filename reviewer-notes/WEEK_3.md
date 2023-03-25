# Summary

Students start a tutorial on express. They learn HTTP basics:

- HTTP methods
  - although, only superficially
  - students are only writing handlers for GET requests at this point
  - the instructor is evading the complexity of non-GET requests; there is
    nothing on HTML forms, or client-side AJAX calls

The tutorial centers around a ["Coding Addict" portfolio
site](https://youtu.be/Oe421EPjeBE?t=18818). The portfolio site has client-side
JavaScript which is provided pre-completed for students. The instructor only
[very briefly](https://youtu.be/Oe421EPjeBE?t=18187) reviews how static files
are served; and certainly presumes that students have prior knowledge of
client-side web development.

[Lesson page](https://learn.codethedream.org/ctd-node-express-class-lesson-1a-node-introduction/)
[Tutorial video](https://www.youtube.com/watch?t=13246&v=Oe421EPjeBE&feature=youtu.be)

# Tedium

This is a copy-and-paste-heavy assignment. Since students put their work into a
different folder, it's quite tricky to understand exactly what they changed
unless you know the course well. As a workaround, you can move student work
into the not-answers folder to easily see exactly what (if anything) they
changed compared to the boilerplate that comes with the course:

```bash
git remote add $STUDENT_NAME $STUDENT_REMOTE_URI
git fetch $STUDENT_NAME
git checkout $STUDENT_NAME/$STUDENT_BRANCH
mv 02-express-tutorial/answers/* 02-express-tutorial/final
rm -rf 02-express-tutorial/answers
git diff
```

## Ignore HTML & CSS

Note that any HTML & CSS you see in the diff was copied and pasted; you can
disregard it.

# Hard Parts

We are departing from "programming 101" and switching to working with Express.
You might have seen some tinkering and experimentation in the last 2 weeks, and
you might see that the tinkering and experimentation goes away this week!

This curriculum does not challenge students to do anything more than copying &
pasting the video tutorial content. If you see any diff at all (after doing the
copy, paste, diff trick above), praise that experimentation! If you don't ask
questions that will assess students' understanding, since the base assignment
doesn't, really:

- What are the HTTP verbs, and why are they useful?
- When you visit a website, which HTTP verb does the browser use?
- How are HTTP headers used?
- What does the content-type header do? (this question is taught explicitly in
  this lesson; students should know)
  - Alternatively, you can comment on part 4, where we use `express.static` and
    ask what happened to all of the complexity of content-type headers from
    part 3? (answer: express sets the content-type automatically based on the
    file extension)
- Are HTTP headers placed on the request, the response, or both?

Encourage students to experiment with the course content, and submit their
experimentation in the future.
