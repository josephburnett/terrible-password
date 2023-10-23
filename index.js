const core = require('@actions/core');

try {
  core.setOutput("password", "password");
  console.log("Super secret password is set as output.");
} catch (error) {
  core.setFailed(error.message);
}
