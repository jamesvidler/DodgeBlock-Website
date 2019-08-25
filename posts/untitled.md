# Building my First VR Game - 10 Lessons I Learned the Hard way

First off, I by no means consider myself an expert in game development (not to mention VR). I'm a web developer with a passion for VR and had a goal of publishing a VR game using Unity. I had no prior experience in game development prior to creating and publishing [Dodgeblock VR for Oculus Go](https://dodgeblockvr.com).

 Was it easy? No. Was it worth it? Yes. However, I do wish I knew what I was in for before I started all this. Had I known what I know now, I could have saved myself a lot of time and effort. These are lessons for my younger (fuller-haired) self, and every other creative soul who wants to build a VR game.


## Lesson #1 - Don't Build the Game
Obviously this sounds counter-productive, but the idea here is that if you are just starting off with Unity and C#, you know nothing. Spend as much time as you can doing tutorials, excercises, and experimenting. If you have a game in mind and you immeidately start trying to implement it, you will get stuck and demoralized very quickly. Being stuck is normally part of the learning process when it comes to development, but this is next level. When you have this grand idea in your head and you can't even get passed how to change the color of a Game Object, your goal is going to seem so far away you are likely to give up.

Instead of trying to start on a game, embrace experimentation. Start with a tutorial or pre-made projects and modify it. This will force you to understand how they work and learn from them. You'll end up totally messing it up, but that's ok it wasn't yours anyway.

## Lesson #2 - Keep it Simple Stupid 
When you've got some familiarity with Unity and you can't keep your voices in your head quiet anymore, you are going to be itching to start on a game. Is it time to let loose and aim for the sky? No. Aim low. Aim real low. 

Whatever familiarity you think you have with Unity, use it, and design your game around your strengths. Sure you can go outside your comfort zone, but bring yourself back to safety before you go too far down the rabbit hole.

Ever wonder why [Dodgeblock VR](https://dodgeblockvr.com) is ONLY comprised of primitive cube Game Objects? 

--screenshot--

Oh I tried other stuff... Imagine spending 8hrs straight trying to figure out how to move a ball in a realistic way as if it was thrown in the air? Or worse, having a bug that causes an exponential amount of VR balls thrown in your face.

--video balls--

Eventually I realized I needed to put constructs on my game and limit my scope using a set of rules. Once I did this, it became very clear to me as to what to build and focus on.

## Lesson #3 - Engage the VR Community ASAP, and don't Stop
In order for your game to ever be successful in the store, you need some momentum going into it. You need hype, and you need champions who are going to vouche for you. Luckily, the VR community is very welcoming and eager to help you with your game. Don't wait until you are almost ready to launch before sharing your game with others. Do it early and often. Build up a following on Reddit and Discord channels. Provide your game using a pre-releease channel in Oculus, notify users after every update, and be consistent.

I started marketing my game back in February 2019, just before I was planning to release it. I got some interest and kept it up for a while, got some useful (and some not-so-useful) feedback, but I ultimately postponed release (see Lesson #6 Feature Creep is Real) and lost all my momentum. I didn't startup engaging users until a week before I was ready to launch. I even forgot entirely about Discord. Don't forget about the community, they are what will make or break your launch.


## Lesson #4 - Avoid the Asset Store
Its tempting to search the asset store for something that you don't know how to do and just import it into your project. Think that's the magic bullet? Far from it. That's not to say there aren't some great stuff in there, but until you really get a grip on what your importing, you are best to avoid it. Save that $30 you are going to spend on a package that boasts fancy particle effects. It might look great in the demo scene, but you'll have no idea how to properly configure it your scene, let along getting it to work in VR.

## Lesson #5 - Take Breaks
Its tempting to put in hours and days at a time on a project, especially if your passionate and excited about it. But, it can cloud your judgement. You need time in between to reflect on your work, collect feedback and iterate.

## Lesson #6 - Grow Some Thick Skin
So you have a game now, however simple it may be, but you think its fun and you are ready to start sharing it with others. Congratulations on making it that far. There's a git cemetary somewhere out there with millions of projects that never saw the light of day. The war isn't over yet though.

When you show your game to friends, family, and beta testers they will have their own opinions. Likely, they won't always align with yours. Getting feedback is extremely valuable, but it can also be your downfall. We all know about negative feedback and that can hurt, but if your game really is that bad its better to know that now than later. Pick yourself up off the floor, take a break and come back to it with a clear head.

Now, what about positive feedback? Take positive feedback from your friends and family with a grain of salt, they'll support you either way. The only positive feedback you can truly trust is from independent testers. Where possible, use a group of testers you don't know personally.

## Lesson #7 - Feature Creep is Real
For me, the most difficult type of feedback to interpret was feature requests. It sounds great and is usually a good sign that people are into your game. In fact they like your game so much they've vested their own time to try and help you. You are likely to get some great ideas here, but you need to always bring it back to **Lesson #2 Keep it Simple Stupid**. Its tempting to implement what your community has asked for. You want to make them happy. Afterall, they really are your first customers. But, if you aren't careful you can end up increasing the scope of your game to levels you never accounted for scewing your original vision for the game. After a few iterations of implementing features, you are likely to get even more feedback on those new updates and your lists of tasks will continue to grow. You'll go way past your intended launch date, and due to the complexity of your game, it will become harder to maintain. More bugs, more headaches, and now you have a rolling launch date. 

Yes, this happened to me. I had [Dodgeblock VR](https://dodgeblockvr.com) approved by Oculus and set to launch back in February 2019. At the same time I had just received tons of feedback from my testers. I got so excited that people were actually playing my game that I dedicated myself to them. I addressed every piece of feedback they had and deligently implemented their requests. Ultimately this forced me to pull the game from the Oculus Store before it even launched - in fear it wasn't good enough. In the months that past, I went back and forth trying to implement different things to satisfy users. Most of the time this lead to me building something, testing it, and throwing it out a week or so later due tp performance and stability issues. 6 months later, and I finally learned I needed to dial it back to the basics if I ever wanted to launch my game.

## Lesson #8 - Be Mindful of your Partner
Developing a video game requires a ton of energy and time. If you are like me, you have a full-time job in tech (I manage a SaaS CMS product - [Agility CMS](https://agilitycms.com)) which doesn't always leave a lot of left in the tank when you are at home. If you have a partner living with you, and your spending all your left-over energy on something they can't participate in, its going to affect them. Of course they will support you, and they may never tell you it bothers them, but this will slowly drain your emotional bank account with them. 
Don't put a strain on your relationship, its not worth it. Make an effort to prioritize time with your partner and try to set a schedule for when you work on your game. This will help both of you make the best of your time together and set expectations. If you can, try to involve your parnter in your project too. Perhaps they can help you test, create marketing materials such as screenshots, posters, videos, etc. For me, I got some buy-in from my partner by establishing any proceeds from my game would go towards our "art fund". She's in my corner now ;)

## Lesson #9 - Mobile VR != PC VR
This will apply to you if you are developing for mobile VR platform. Just because something worked well in your Oculus Rift while you are developing in Unity does NOT mean it will work well (or at all) on the Oculus Go. The Go has dramatically different hardware than the Rift and every frame is critical on the Go. Pay very close attention to the FPS on the Oculus Go. Add an FPS counter so you can see the FPS while you are testing it on the Go. If it drops below 60 FPS (on average), revert whatever change you just did. 

I can't tell you how many hours i've wasted reverting a day (or sometimes days worth) of updates because of performance issues on the Oculus Go. What made this even worse is that i'd often test a whole bunch of updates and then I'd have to to go through the pain staking process of elimination to figure out what the culprit is. Test on the Oculus Go after every bug fix or feature update before moving on and be smart about using Git to track these changes.

## Lesson #10 - You CAN Do it!
If you aren't familiar with imposter-syndrome, you will be after trying to make your first game. You will constantly think you or your game isn't good enough. You'll second-guess every decision, lose confidence, and you might even give up.

The best way to combat this is to have a good support system. Friends and family are great for this. The fact that you are even working on a VR game is remarkable enough. When you are down on yourself, talk to them about it. Sometimes all you need is a little reassurance and a reminder of how awesome you are. 

The VR community can also help with this. Nothing imvigorated me more than hearing that someone lost themselves in VR with my game.

## TODO: Conclusion??


