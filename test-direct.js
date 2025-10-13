import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

async function testDirectAPI() {
  console.log("Testing direct API call...");
  console.log("API Key present?", !!process.env.GEMINI_API_KEY);
  console.log("API Key first 10 chars:", process.env.GEMINI_API_KEY?.substring(0, 10));
  
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error("No API key found!");
    return;
  }
  
  try {
    console.log("Making direct HTTP request to list models...");
    
    // Direct HTTP request to list models
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    
    console.log("Response status:", response.status);
    console.log("Response status text:", response.statusText);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response body:", errorText);
      return;
    }
    
    const data = await response.json();
    console.log("Success! Available models:");
    
    if (data.models && data.models.length > 0) {
      data.models.forEach(model => {
        console.log(`- ${model.name} (${model.displayName})`);
        console.log(`  Supports: ${model.supportedGenerationMethods?.join(', ') || 'N/A'}`);
      });
    } else {
      console.log("No models found in response");
    }
    
  } catch (error) {
    console.error("Direct API test failed:", error.message);
    console.error("Full error:", error);
  }
}

testDirectAPI();