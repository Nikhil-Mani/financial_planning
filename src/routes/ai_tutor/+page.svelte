<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<script>
	import Chatbot from "./Chatbot.svelte";

</script>

<div class="text-column">
	<h1>AI Tutor</h1>

	<p>
		Finding high-quality tutoring for free online is tough. 
		Some great resources are  
		<a href='https://www.khanacademy.org/' >Khanacademy</a> 
		and their partner organization, <a href='https://schoolhouse.world/' >Schoolhouse</a>. Schoolhouse is a great way to get real help from tutors who are knowledgable in almost everything.
	</p>

	

	<p>
		However, sometimes you might have a very specific question that no one's able to answer. For that, we've created an AI based tutor below. 
	</p>

	<p>
		<Chatbot />
	</p>
</div>


<style>
	h1{
		font-size: 3rem;
	}
	p{
		font-size:1.5rem; 
	}
</style>