import Input from '../input';
import { Cli } from '../cli/cli';

const core = require('@actions/core');

class CloudRunnerOptions {
  static get cloudRunnerBuilderPlatform() {
    const input = Input.getInput('cloudRunnerBuilderPlatform');
    if (input) {
      return input;
    }
    if (Input.cloudRunnerCluster !== 'local') {
      return 'linux';
    }

    return;
  }
  static get gitPrivateToken() {
    return core.getInput('gitPrivateToken') || false;
  }

  static get customJob() {
    return Input.getInput('customJob') || '';
  }

  static customJobHooks() {
    return Input.getInput('customJobHooks') || '';
  }

  static cachePushOverrideCommand() {
    return Input.getInput('cachePushOverrideCommand') || '';
  }

  static cachePullOverrideCommand() {
    return Input.getInput('cachePullOverrideCommand') || '';
  }

  static readInputFromOverrideList() {
    return Input.getInput('readInputFromOverrideList') || '';
  }

  static readInputOverrideCommand() {
    return Input.getInput('readInputOverrideCommand') || '';
  }

  static get cloudRunnerBranch() {
    return Input.getInput('cloudRunnerBranch') || 'cloud-runner-develop';
  }

  static get postBuildSteps() {
    return Input.getInput('postBuildSteps') || '';
  }

  static get preBuildSteps() {
    return Input.getInput('preBuildSteps') || '';
  }

  static get awsBaseStackName() {
    return Input.getInput('awsBaseStackName') || 'game-ci';
  }

  static get cloudRunnerCluster() {
    if (Cli.isCliMode) {
      return Input.getInput('cloudRunnerCluster') || 'aws';
    }

    return Input.getInput('cloudRunnerCluster') || 'local';
  }

  static get cloudRunnerCpu() {
    return Input.getInput('cloudRunnerCpu');
  }

  static get cloudRunnerMemory() {
    return Input.getInput('cloudRunnerMemory');
  }

  static get kubeConfig() {
    return Input.getInput('kubeConfig') || '';
  }

  static get kubeVolume() {
    return Input.getInput('kubeVolume') || '';
  }

  static get kubeVolumeSize() {
    return Input.getInput('kubeVolumeSize') || '5Gi';
  }

  static get kubeStorageClass(): string {
    return Input.getInput('kubeStorageClass') || '';
  }

  static get checkDependencyHealthOverride(): string {
    return Input.getInput('checkDependencyHealthOverride') || '';
  }

  static get startDependenciesOverride(): string {
    return Input.getInput('startDependenciesOverride') || '';
  }

  static get cacheKey(): string {
    return Input.getInput('cacheKey') || Input.branch;
  }

  static get cloudRunnerTests(): boolean {
    return Input.getInput(`cloudRunnerTests`) || false;
  }
}

export default CloudRunnerOptions;
