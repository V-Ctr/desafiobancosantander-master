import * as core from '@actions/core';
import * as github from '@actions/github';
import { exec } from 'child_process';
import { Octokit } from "@octokit/rest";

async function deleteReaction(reactionId: number) {
  try {
    const token = core.getInput('github_token');
    const octokit = new Octokit({ auth: token });

    await octokit.reactions.deleteForIssue({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      issue_number: github.context.issue.number,
      reaction_id: reactionId,
    });

    core.info("Reaction deleted successfully");
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(`Error deleting reaction: ${error.message}`);
    } else {
      core.setFailed(`Error deleting reaction: ${String(error)}`);
    }
  }
}

async function run() {
  try {
    const token = core.getInput('github_token');
    const octokit = github.getOctokit(token);

    exec('npm run lint', (error, stdout, stderr) => {
      if (error) {
        core.setFailed(`Linting failed: ${stderr}`);
        return;
      }
      core.info(`Linting output: ${stdout}`);

      // Exemplo de uso da função deleteReaction
      deleteReaction(1); // Substitua pelo ID da reação que você deseja deletar
    });
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    } else {
      core.setFailed(String(error));
    }
  }
}

run();