// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  if (!apiKey) {
    throw new Error("Google Gemini API key is missing. Set it in your environment variables.");
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget,Give me a Hotels options list with 4 or more HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with more placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, what time we can visit ,time to travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
          {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\"min\": 40, \"max\": 100}, \n      \"hotelImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/CircusCircusLasVegas.jpg/1280px-CircusCircusLasVegas.jpg\",\n      \"geoCoordinates\": {\"latitude\": 36.1215, \"longitude\": -115.1736},\n      \"rating\": 3.5,\n      \"description\": \"Budget-friendly option with a circus theme and some free entertainment.\"\n    },\n    {\n      \"hotelName\": \"Main Street Station Casino, Brewery & Hotel\",\n      \"hotelAddress\": \"200 S. Main Street, Las Vegas, NV 89101\",\n      \"price\": {\"min\": 50, \"max\": 120},\n      \"hotelImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d2/51/84/main-street-station-casino.jpg?w=1200&h=-1&s=1\",\n      \"geoCoordinates\": {\"latitude\": 36.1689, \"longitude\": -115.1427},\n      \"rating\": 4.0,\n      \"description\": \"Downtown location, historic feel, often has affordable rates.\"\n    },\n    {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": {\"min\": 45, \"max\": 110},\n      \"hotelImageUrl\": \"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/23/60/12/excalibur-hotel-casino.jpg?w=1200&h=-1&s=1\",\n      \"geoCoordinates\": {\"latitude\": 36.0912, \"longitude\": -115.1725},\n      \"rating\": 3.8,\n      \"description\": \"Medieval theme, on the Strip, known for relatively lower prices.\"\n    },\n    {\n      \"hotelName\": \"Travelodge by Wyndham Las Vegas Center Strip\",\n      \"hotelAddress\": \"3750 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": {\"min\":30, \"max\": 80},\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/4000000/3750000/3746000/3745717/a0a66a9e_z.jpg\",\n      \"geoCoordinates\": {\"latitude\": 36.0932, \"longitude\": -115.1719},\n      \"rating\": 3.5,\n      \"description\": \"Basic but clean option close to the Strip, often the cheapest option.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"theme\": \"Free Strip Exploration\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Fountains\",\n          \"placeDetails\": \"Free water show with music and lights.\",\n          \"placeImageUrl\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Bellagio_Fountains_at_night.jpg/1280px-Bellagio_Fountains_at_night.jpg\",\n          \"geoCoordinates\": {\"latitude\": 36.1139, \"longitude\": -115.1757},\n          \"ticketPricing\": \"Free\",\n          \"visitTime\": \"Evening (7 PM - 9 PM)\",\n          \"travelTime\": \"Variable, depending on your hotel location (15-30 mins walk/bus/taxi)\"\n        },\n        {\n          \"placeName\": \"Walk the Strip\",\n          \"placeDetails\": \"Window shop, see the sights, people-watch.\",\n          \"placeImageUrl\": \"Example image of Las Vegas Strip (search online)\",\n          \"geoCoordinates\": {\"latitude\": 36.11, \"longitude\": -115.17},\n          \"ticketPricing\": \"Free\",\n          \"visitTime\": \"Afternoon (2 PM - 6 PM)\",\n          \"travelTime\": \"Walking, several hours\"\n        }\n      ]\n    },\n    \"day2\": {\n      \"theme\": \"Downtown & Value Activities\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Canopy with light shows and street performers.\",\n          \"placeImageUrl\": \"https://www.vegasexperience.com/wp-content/uploads/2019/07/Fremont-Street-Experience-Canopy-6.jpg\",\n          \"geoCoordinates\": {\"latitude\": 36.1699, \"longitude\": -115.1401},\n          \"ticketPricing\": \"Free\",\n          \"visitTime\": \"Evening (7 PM - 10 PM)\",\n          \"travelTime\": \"30-45 mins by bus or taxi\"\n        },\n        {\n          \"placeName\": \"Container Park\",\n          \"placeDetails\": \"Unique shopping, dining, and entertainment area built from shipping containers.\",\n          \"placeImageUrl\": \"https://www.containerpark.com/wp-content/uploads/2018/10/Container-Park-Aerial-Photo-1024x683.jpg\",\n          \"geoCoordinates\": {\"latitude\": 36.1685, \"longitude\": -115.1365},\n          \"ticketPricing\": \"Free to enter\",\n          \"visitTime\": \"Afternoon (3 PM - 6 PM)\",\n          \"travelTime\": \"Short walk from Fremont Street\"\n        }\n      ]\n    },\n    \"day3\": {\n      \"theme\": \"Relaxation & Budget-Friendly Fun\",\n      \"plan\": [\n        {\n          \"placeName\": \"Pool Day at Hotel\",\n          \"placeDetails\": \"Relax by the pool (if your hotel has one).\",\n          \"placeImageUrl\": \"Placeholder image URL (replace with image from your hotel)\",\n          \"geoCoordinates\": {\"latitude\": \"Hotel Latitude\", \"longitude\": \"Hotel Longitude\"},\n          \"ticketPricing\": \"Free (often included in hotel stay)\",\n          \"visitTime\": \"Afternoon (2 PM - 5 PM)\",\n          \"travelTime\": \"N/A\"\n        },\n        {\n          \"placeName\": \"Free Shows\",\n          \"placeDetails\": \"Many casinos offer free shows, check their schedules.\",\n          \"placeImageUrl\": \"Placeholder - casino show image\",\n          \"geoCoordinates\": \"Variable - depends on location of show\",\n          \"ticketPricing\": \"Free\",\n          \"visitTime\": \"Evening (7 PM onwards)\",\n          \"travelTime\": \"Variable\"\n        }\n      ]\n    }\n  }\n}\n```\n\n**Important Notes:**\n\n* **Prices are estimates:** Hotel and activity costs change constantly. Always check current prices before booking.\n* **Transportation:** Budget for transportation (bus, rideshare) between locations, especially if not staying on the Strip.  The RTC (Regional Transportation Commission) of Southern Nevada offers affordable bus service.\n* **Food:**  This itinerary doesn't include food costs, which can significantly impact your budget. Pack snacks and consider less expensive dining options.\n* **Travel Times:**  Travel times are estimates and will depend on traffic and your chosen mode of transportation.  Use a mapping app for more accurate estimations.\n* **Image URLs:** Replace placeholder image URLs with actual images from the web.\n\n\nRemember to check the operating hours of attractions and plan accordingly, as these are subject to change.  Enjoy your Las Vegas trip!\n"},
          ],
        },
      ],
    });
