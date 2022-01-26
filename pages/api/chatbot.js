// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import moment from "moment";

export default function handler(req, res) {
  const { query } = req.query;
  const result = {};

  switch (query.toLowerCase().trim()) {
    case "what day is it":
      const dayName = moment().format("dddd");
      result.answer = `Today is ${dayName}.`;
      break;
    case "what time is it":
      const time = moment().format("LT");
      result.answer = `The time is ${time} CST.`;
      break;
    case "what month is it":
      const month = moment().format("MMMM");
      result.answer = `The month is ${month}.`;
      break;
    case "what year is it":
      const year = moment().format("YYYY");
      result.answer = `The year is ${year}.`;
      break;
    case "who could have done a better job on their technical exercise today":
      result.answer = `Alex Rueb`;
      break;
    default:
      result.answer = "Sorry, I didn't understand the question. ";
  }

  res.status(200).json(result);
}
