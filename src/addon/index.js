import addons from '@storybook/addons';
import { ADD_COVERAGE } from './constants';

const findCoverageResults = (coverageFiles, coverageResults = []) => {
  const coverageEntries = Object.keys(coverageResults);
  return Object.values(coverageFiles).map((fileName) => {
    if (coverageResults) {
      const resultKey = coverageEntries.find(entry => entry.includes(fileName));
      const resultData = coverageResults[resultKey];
      return {
        fileName,
        result: resultData,
      };
    }

    return { fileName };
  });
};

const emitAddTests = ({ kind, story, coverageFiles, options }) => {
  addons.getChannel().emit(ADD_COVERAGE, {
    kind,
    storyName: story,
    coverageData: findCoverageResults(coverageFiles, options.coverage),
    passThreshold: options.passThreshold,
    failThreshold: options.failThreshold,
  });
};

export const withCoverage = (userOptions) => {
  const defaultOptions = {
    coverageFiles: '((\\.[jt]s)|(\\.[jt]sx)?$',
  };
  const options = { ...defaultOptions, ...userOptions };

  return (...args) => {
    const [storyFn, { kind, parameters = {} }] = args;
    let { coverageFiles } = parameters;

    if (typeof coverageFiles === 'string') {
      coverageFiles = [coverageFiles];
    }

    if (coverageFiles && Array.isArray(coverageFiles)) {
      emitAddTests({ kind, coverageFiles, options, story: storyFn });
    }

    return storyFn();
  };
};

export default withCoverage;
