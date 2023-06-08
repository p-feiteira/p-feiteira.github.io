function calculateAge() 
{
  const date = new Date(861205755000)
  const now = new Date();
  const diff = Math.abs(now - date );
  const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); 
  document.getElementById("my-age").innerHTML = age
} 