// utils/AIResponseHandler.js
export default async function AIResponseHandler(userInput, category) {
    if (category === "gaming") {
      return handleGamingRecommendations(userInput);
    }
    if (category === "cooking") {
      return handleCookingRecommendations(userInput);
    }
    return "I'm processing your request...";
  }
  
  function handleGamingRecommendations(userInput) {
    userInput = userInput.toLowerCase();
  
    if (userInput.includes("horror game")) {
      return "What kind of horror experience do you prefer? Story-driven or open-ended?";
    }
    if (userInput.includes("story-driven")) {
      return "Do you like survival mechanics, or do you prefer a more cinematic experience?";
    }
    if (userInput.includes("survival")) {
      return "Here are some survival horror games: Resident Evil, The Forest, Dead Space.";
    }
    if (userInput.includes("cinematic")) {
      return "Here are some cinematic horror experiences: The Evil Within, Until Dawn, Alan Wake.";
    }
    if (userInput.includes("jump scares")) {
      return "Do you love or hate jump scares?";
    }
    if (userInput.includes("hate jump scares")) {
      return "Here are some psychological horror games with minimal jump scares: SOMA, Fatal Frame, Silent Hill 2.";
    }
    if (userInput.includes("love jump scares")) {
      return "Here are some intense horror games with jump scares: Visage, Outlast, Five Nights at Freddy’s.";
    }
    if (userInput.includes("fast-paced")) {
      return "Here are some fast-paced horror-action games: Resident Evil 4, Dead Space, Doom 3.";
    }
    if (userInput.includes("slow-burn")) {
      return "Here are some slow-burn horror experiences: Silent Hill 2, Fatal Frame, Amnesia.";
    }
    if (userInput.includes("multiplayer")) {
      return "Do you want a cooperative experience or competitive horror?";
    }
    if (userInput.includes("cooperative")) {
      return "Here are some co-op horror games: Phasmophobia, Dead by Daylight (Survivor mode).";
    }
    if (userInput.includes("competitive")) {
      return "Here are some competitive horror games: Dead by Daylight (Killer mode), Deceit.";
    }
    
    return "I need more details. What kind of game experience are you looking for?";
  }
  