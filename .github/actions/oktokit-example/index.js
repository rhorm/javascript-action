const github = require('@actions/github');
const core = require('@actions/core');

async function run() {
    const token = core.getInput('gh-token');
    const workflowName = core.getInput('workflow-name');

    const octokit = github.getOctokit(token);

    const {data: {workflow_runs: workflowRuns}} = await octokit.rest.actions.listWorkflowRunsForRepo({
        owner: 'rhorm',
        repo: 'javascript-action'
    });

    console.log(workflowRuns)
    const {conclusion} = workflowRuns.find(workflowRun => workflowRun.status.includes('complete'));
    core.setOutput('conclusion', conclusion);
}

run();