# Modern webdev without a build step!

Typescript! React*! No compiler!

---

## Remember the 90s?

First some nostalgia.

- Programming these days is _really_ complicated.
- Everything used to be so much simpler!

---
In the 90s, If you went to a cool website
![[Screenshot 2024-08-24 at 1.57.30 PM.png]]

---
You could actually read how they did it
![[Screenshot 2024-08-24 at 1.57.14 PM.png]]

--- 
Verses nowadays
![[Screenshot 2024-08-24 at 2.00.34 PM.png]]

---
The source is impenetrable
![[Screenshot 2024-08-24 at 11.47.02 AM.png]]

--- 
![[QBasic_Opening_Screen.png]]

--- 
## Programming actually sucked in the 90s

##### But is _was_ way simpler.
 
--- 
## Fast forward to now

#### Modern programming is actually way better.

- Everyone has computers (if not at their home, at least in their pockets)
- The internet is truly incredible
- Browsers can do so much more (and are frequently up to date!)

- Modern web frameworks (like React!) are actually quite nice. 
- Elm-like architectures are awesome!
- Typescript is great!
- Live reloading!

---
### But it has a lot of downsides

  ![[Screenshot 2024-08-24 at 11.49.31 AM.png]]

---
### But it has a lot of downsides

- A "simple" app often has thousands of dependencies
- `node_modules` is terrible
- Bundlers are awful extremely complicated machines (webpack!)
- The "compile" process is more complex for javascript (a scripting language!) than it is for "compiled" languages these days.
- Need to know so many tools and frameworks just to get off the ground

--- 
### Can we have our cake and eat it?

Can we get some of the nice things we remember from the 90s without the drawbacks of modern frameworks?

---
### Sometimes yes!

- Modern CSS is great
	- Don't need sass!
- Browsers understand modern javascript natively!
	- No compiler needed!
- Modern javascript has tagged template literals
	- Don't need JSX (or the extra compiler support)
- Typescript supports types in JSDoc comments
	- We can even take advantage of typescript without its compiler!
- CDNs/HTTP2
	- Don't need bundlers either!

---
## Demo



---
### Advantages

- I don't need npm
- I don't need a bundler
- I don't need node
- I don't need a compiler (not even for typescript)
- I don't even need a .gitignore!
- Minimal dependencies
 
### I just need vscode and a browser.

I bet you in 10 years, I can open this in a browser, and it will still work without modifications.

--- 
### Final thoughts

- Should you actually do this? 
	- Probably not. I happen to like doing it this way and I have zero schedule pressure. If was building something for someone else I would still use the traditional tools, especially package managers exist for a reason.
- It sounds like you're just replacing all these tool dependencies with VSCode plugins! Aren't you just now just dependent on VSCode?
	- Yes and no:
	  1:  Many of these plugins have analogs in other editors, 
	  2: You don't _need_ any of these plugins to actually edit or run the code. If I send a zip of my code to someone, they can edit it in notepad and run it in a web browser, it might not be the nicest environment, but it would work. 
- But what if typescript's version changes!? you're code might break!
	- nope!, the _types_ might break, but the code will still just run like before.