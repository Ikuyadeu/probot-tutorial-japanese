import { Application } from "probot";

export = (app: Application) => {
  app.log("Yay, the app was loaded!");
  app.on("issues.opened", async (context) => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    context.log(context.payload);
    const params = context.issue({body: "Hello World!"});

    return context.github.issues.createComment(params).then(() => { return; });
    // return context.github.issues.createComment(context.issue({body: 'Hello World!'});

  });
};
