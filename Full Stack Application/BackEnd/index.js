import express from "express";
const app = express();
const port = 3000;

app.get('/', (req ,res )=> {
  res.send("application properly work : ")
})

app.get("/api/myInfo", (req, res) => {
  const myApi = {
    login: "ak-akash03",
    id: 114861476,
    node_id: "U_kgDOBtilpA",
    avatar_url: "https://avatars.githubusercontent.com/u/114861476?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ak-akash03",
    html_url: "https://github.com/ak-akash03",
    followers_url: "https://api.github.com/users/ak-akash03/followers",
    following_url:
      "https://api.github.com/users/ak-akash03/following{/other_user}",
    gists_url: "https://api.github.com/users/ak-akash03/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/ak-akash03/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/ak-akash03/subscriptions",
    organizations_url: "https://api.github.com/users/ak-akash03/orgs",
    repos_url: "https://api.github.com/users/ak-akash03/repos",
    events_url: "https://api.github.com/users/ak-akash03/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ak-akash03/received_events",
    type: "User",
    site_admin: false,
    name: "Mr. Akash Rathod",
    company: null,
    blog: "https://www.linkedin.com/in/akashrathod03",
    location: "Chalisgaon - India",
    email: null,
    hireable: null,
    bio: "Hi, I'm Akash You might recognize me as @ak-akash03 mascot",
    twitter_username: null,
    public_repos: 28,
    public_gists: 0,
    followers: 14,
    following: 29,
    created_at: "2022-10-02T11:56:27Z",
    updated_at: "2024-02-15T03:23:31Z",
  };
    res.send(myApi);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
