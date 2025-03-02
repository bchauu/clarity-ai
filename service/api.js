const BASE_URL = "http://localhost:5050";  // Update if deploying

export const askAI = async (userId, userInput, category) => {
    try {
        const response = await fetch(`${BASE_URL}/api/ask`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ user_id: userId, user_input: userInput, category })
        });

        const data = await response.json();
        return data.response;
    } catch (error) {
        console.error("❌ Error fetching AI response:", error);
        return "Something went wrong. Try again!";
    }
};

export const getPrompt = async (userId, category) => {
    try {
        const response = await fetch(`${BASE_URL}/api/prompt?user_id=${userId}&category=${category}`);
        const data = await response.json();
        return data.prompt;
    } catch (error) {
        console.error("❌ Error fetching prompt:", error);
        return "Error fetching prompt";
    }
};

export const getUserHistory = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/history?user_id=${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("❌ Error fetching history:", error);
        return [];
    }
};