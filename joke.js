let a = [
    "What do kids play when their mom is using the phone? Bored games",
    "What do you call an ant who fights crime? A vigilANTe!", 
    "Why are snails slow? Because they’re carrying a house on their back",
    "What’s the smartest insect? A spelling bee!", 
    "A short joke about storm clouds and weather rain Canva/Parade", 
    "What does a storm cloud wear under his raincoat? Thunderwear", 
    "What is fast, loud and crunchy? A rocket chip", 
    "How does the ocean say hi? It waves!", 
    "What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates", 
    "Why did the teddy bear say no to dessert? Because she was stuffed", 
    "Why did the soccer player take so long to eat dinner? Because he thought he couldn’t use his hands", 
    "Name the kind of tree you can hold in your hand? A palm tree!", 
    "What do birds give out on Halloween? Tweets", 
    "What has ears but cannot hear? A cornfield", 
    "What’s a cat’s favorite dessert? A bowl full of mice-cream", 
    "Where did the music teacher leave her keys? In the piano!", 
    "What did the policeman say to his hungry stomach? “Freeze You’re under a vest”", 
    "What did the left eye say to the right eye? Between us, something smells!", 
    "What do you call a guy who’s really loud? Mike19", 
    "Why do birds fly south in the winter? It’s faster than walking!", 
    "What did the lava say to his girlfriend? “I lava you!”", 
    "Did the student eat his homework? Because the teacher told him it was a piece of cake", 
    "What did Yoda say when he saw himself in 4k? HDMI", 
    "Which superhero hits home runs? Batman!", 
    "What’s Thanos’ favorite app on his phone? Snapchat", 
    "Sandy’s mum has four kids; North, West, East What is the name of the fourth child? Sandy, obviously!", 
    "What is a room with no walls? A mushroom", 
    "Why did the blue jay get in trouble at school? For tweeting on a test!", 
    "What social events do spiders love to attend? Webbings", 
    "What did one pickle say to the other? Dill with it"
  ];
  let count = 0;
  let arr = Math.floor(Math.random(a)*30);
  let joke = document.getElementById("joke")
  let btn = document.getElementById("btn")
  joke.innerHTML=a[arr]
  btn.addEventListener('click',clc=()=>
    {
      joke.innerHTML=a[Math.floor(Math.random(a)*30)];
    })



  //   console.log(typeof(joke.innerHTML))
  // //  Checking for the index value
  //   for(let j=0;j<a.length;j++)
  //   {
  //   console.log(j)
  //   }
  //   if(typeof(joke.innerHTML)=="undefined")
  //   {
  //     console.log("Over")
  //   }
  //   else
  //   {
  //     joke.innerHTML=a[arr+[i++]]
  //   console.log(joke.innerHTML=a[arr+i])
  //   console.log(i)
  //   }
    // console.log(a[arr[i]])  Get the index and the value of the largest size 
    // After getting the largest value use it in if statement and log the message 
  // for(let i=0;i<a.length;i++)
  // {
  //   // console.log(i)
  //   count+=1
  // }
  // console.log(count)
  
  