ডিবাগ করার পাঁচ টেকনিক:
০. Issue Reproduce: কোন কিছু কাজ না করলে। বা কিছু সমস্যা দিলে দুইটা কাজ তোমাকে করতেই হবে। এক, কনসোল এ গিয়ে দেখতে হবে। কোন এরর আছে কিনা। লাল বাত্তি জ্বলছে কিনা। আরেকটা কাজ হচ্ছে কি করলে এরর টা দেয় সেটা নিজে নিজে করে করে দেখতে হবে কয়েকবার। এবং দেখতে হবে কোন জায়গাটায় কি করলে এরর খায়। এইটাকে বলে error/issue reproduce করা। 
এইবার বলা যাক পাঁচ টেকনিক নিয়ে। 
১. Error point Backward অর্থাৎ যেখানে এরর খাইছে (লাল বাত্তি জ্বালায় দিছে) তার উপরে একটা ব্রেকপয়েন্ট দিবে। এবং সেখান থেকে ডিবাগ করে করে। বা কনসোল করে করে পিছন থেকে সামনে এগুতে থাকবে। 
২. Error point Forward অনেক সময় যেখানে error খায় সেখানে কিছু করার উপায় থাকে না। বা উপায় থাকলেও সেখানে চেষ্টা করে কিছু উদ্ধার করতে পারো নাই। অথবা কোন একটা ফ্রেমওয়ার্ক এর ভিতরে গিয়ে এরর দিচ্ছে। এখন ফ্রেমওয়ার্ক এর মধ্যে গিয়ে ডিবাগিং করা পসিবল না। দরকারও পড়ে না বেশিরভাগ সময়। তখন তোমার কাছে করণীয় হচ্ছে। কোথায় কোথায় কী কী করলে এই error এর কাছে যায়। সেই কাজ এর একদম শুরু থেকে শুরু করে ধীরে ধীরে error এর দিকে যাওয়া। তাহলেও তুমি অনেক কিছু পেয়ে যেতে পারো। 
৩. আরেকটা উপায় হচ্ছে। তুমি ব্রেকপয়েন্ট ইউজ না করে। বা কম ইউজ করে বেশি বেশি Console log করে করে আউটপুট দেখে দেখে সামনে এগুবে। এতে সুবিধা হয় তুমি দেখতে দেখতে সামনে গেলে। এইটাও অনেক সময় কাজ করে। 
৪. এইটা আরেকটা টেকনিক। যেখানে তুমি একটু অংশ কমেন্ট করে দেখবে। কোন অংশে এরর দিচ্ছে। আর কোন অংশ কাজ করতেছে। এইটা বেশিরভাগ ক্ষেত্রে কোন জায়গা থেকে কোড কপি করলে বা অনেক খানি কোড refactor করলে যখন একটু প্যাচ লেগে যায়। তখন এই Elimination Technique কাজে লাগতে পারে। 
৫. Combination Technique ফাইনাল টেকনিক আসলে। উপরের যেকোন দুইটা বা তিনটা একসাথে কম্বাইন করে ইউজ করা। এবং বেশিরভাগ ক্ষেত্রেই এক টেকনিক এ কাজ না করলে পরের টেকনিক ট্রাই করতে হয়। এবং এইভাবেই ধৈর্য্য ধরে ধরে ২-৩দিন সময় নিয়ে নিয়ে বাগ ফিক্স করতে হয়। 
আমরা প্রাথমিক ধারণাটা দিয়ে দেয়ার চেষ্টা করেছি। সেই সাহস এবং টেকনিক দেয়ার চেষ্টা করতেছি। এই জিনিসগুলো একদিন বা এক সপ্তাহে চলে আসবে না। একটু সময় লাগবে। এক দেড় বছর কাজ করতে করতে তোমার ভিতরে জিনিসটা চলে আসবেই। তার আগ পর্যন্ত যত লাগবে। ধৈর্য্য ধরে মাটি কামড়ে লেগে থাকতে হবে।
.

মাইলস্টোন ৭ টেকএওয়ে  
এই মাইলস্টোন থেকে তুমি যদি পাঁচটা জিনিস শিখতে চাও তাহলে নিচের এই পাঁচটি জিনিস আরেকবার ভালো করে দেখে নাও- 
১. অল্প করে হলেও জাভাস্ক্রিপ্ট কিভাবে কাজ করে সেই সম্পর্কে ধারণা নেয়া লাগবে।
২. ছোট করে হলেও ব্রাউজার কিভাবে কাজ করে সেটা জানতে হবে। একদম সব বুঝে উড়ায় ফেলার দরকার নাই। তবে একটু হলেও জানতে হবে। 
৩. একটা url এর মধ্যে কী কী পার্টস থাকে। কোনটাকে কি বলে সেটা তোমাকে জানতে হবে। 
৪. ব্রাউজারে গিয়ে location API দিয়ে কিভাবে url এর ডিফারেন্ট পার্টস দেখানো যেতে পারে সেটা কিছুটা বুঝতে হবে। 
৫. local storage আর session storage এর মধ্যে পার্থক্য কি। কখন কোনটা ইউজ করতে হয়। 

এই মাইলস্টোন থেকে তুমি যদি আরো দশটা জিনিস এ খেয়াল রাখতে চাও তাহলে সেগুলা হবে। 
১. What is JavaScript সেটা গুগলে সার্চ দিয়ে একটু দেখে নাও। 
২. setTimeout এবং setInterval কিভাবে কাজ করে। এই দুইটার মধ্যে ডিফারেন্স কি 
৩. history api কিভাবে ইউজ করে 
৪. alert, prompt, confirm এই তিনটা এর মধ্যে ডিফারেন্স কি। কখন কোনটা ইউজ করতে হয়। সেই জিনিসগুলা একটু দেখে ফেলো। .
৫. গুগলে সার্চ দিয়ে devtool এর ডকুমেন্টেশন খুঁজে বের করে সেগুলা পড়া। 
৬. টাইপস্ক্রিপ্ট আর জাভাস্ক্রিপ্ট এর মধ্যে ডিফারেন্স কি কি 
৭. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও আরেকবার দেখে রাখবে। 
৮. accessibility কি জিনিস?
৯. call stack কি জিনিস? 
১০. Regular এক্সপ্রেশন কি কাজে লাগে?
