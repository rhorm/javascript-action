const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    const token = core.getInput('gh-token');
    const workflowName = core.getInput('workflow-name');

    const octokit = github.getOctokit(token);

    const {data: workflowRuns} = await octokit.rest.actions.listWorkflowRunsForRepo({
        owner: 'rhorm',
        repo: 'javascript-actions'
    });

    console.log(workflowRuns)
}

run();