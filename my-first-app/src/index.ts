import { Application, Context } from "probot";

export = (app: Application) => {
  app.log("Yay, the app was loaded!");
  app.on("issues.opened", async (context: Context) => {
    // `context` extracts information from the event, which can be passed to
    // GitHub API calls. This will return:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    context.log(context.payload);
    const params = context.issue({body: "Hello World!"});

    context.github.issues.createComment(params);
    // return context.github.issues.createComment(context.issue({body: 'Hello World!'});

  });
};
