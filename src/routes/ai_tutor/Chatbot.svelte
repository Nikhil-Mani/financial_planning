<script lang='ts'>
    let inputValue = 'Input Here';

    function generateGPT(token: string){
        const response = `GPT would respond appropriately given '${token}' as the prompt`     // Chat GPT Function would replace here 
        return response;
    }
  </script>
  
  <input type="text" bind:value={inputValue} placeholder="Enter some text" />
  <p>{generateGPT(inputValue)} </p>
  
  <style>
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
  
    input[type="text"] {
      width: 300px;
      padding: 10px;
      margin: 10px 0;
      border: 2px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
    }
  
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #007BFF;
      color: white;
      font-size: 16px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    p {
      font-size: 18px;
      margin-top: 20px;
    }
  </style>