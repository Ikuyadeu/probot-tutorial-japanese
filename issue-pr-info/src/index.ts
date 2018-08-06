import { Application, Context } from "probot";
// import fs = require("fs-extra");

export = (app: Application) => {
  // Your code here
  app.log("Yay, the app was loaded!");

  // async function reply_from_bot_repo(context: Context) {
  //   const reply = fs.readFileSync("ISSUE_REPLY_TEMPLATE.md", "utf8");
  //   const params = context.issue({body: reply});

  //   context.github.issues.createComment(params);
  // }

  // async function open_readme(context: Context) {
  //   const options = context.repo({path: "README.md"});
  //   const res = (await context.github.repos.getContent(options)).data;
  //   const template = new Buffer(res.content, "base64").toString();
  //   const params = context.issue({body: template});

  //   context.github.issues.createComment(params);
  // }

  // async function for_thanks(context: Context) {
  //   const issue = (await context.github.issues.get(context.issue())).data;
  //   const user = issue.user.login;
  //   const reply = `@${user} thank you for your issue!`;

  //   const params = context.issue({body: reply});

  //   context.github.issues.createComment(params);
  // }

  // async function pull_request_info(context: Context) {

  //   let rep = "Get PullRequest Info\n\n";
  //   const issue = (await context.github.issues.get(context.issue())).data;
  //   const issuedescription = issue.body;
  //   const issuetitle = issue.title;

  //   rep = `${rep}PullRequest Title : ${issuetitle}\n\n` +
  //         `PullRequest Description : ${issuedescription}`;

  //   const params = context.issue({body: rep});

  //   context.github.issues.createComment(params);
  // }

  // app.on("issues.opened", reply_from_bot_repo);
  // app.on("issues.opened", open_readme);
  // app.on("issues.opened", for_thanks);
  // app.on("pull_request.opened", pull_request_info);
};
