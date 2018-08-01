import { Application, Context } from "probot";

export = (app: Application) => {
  app.log("Yay, the app was loaded!");
  app.on("issues.opened", async (context: Context) => {
    // `context`はGitHubAPIからイベントの情報を抽出します
    // GitHub API calls.からは以下のような情報が得られます:
    //   {owner: 'yourname', repo: 'yourrepo', number: 123, body: 'Hello World!}
    context.log(context.payload);
    const params = context.issue({body: "Hello World!"});

    // issueにコメントを投稿
    context.github.issues.createComment(params);

  });
};
