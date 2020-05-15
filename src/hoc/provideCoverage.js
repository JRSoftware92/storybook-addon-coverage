import React, { Component as ReactComponent } from 'react';
import { STORY_CHANGED } from '@storybook/core-events';

import { ADD_COVERAGE } from '../constants';

const provideCoverage = (Component) => class TestProvider extends ReactComponent {
  state = {};

  static defaultProps = {
    active: false,
  };

  componentDidMount() {
    this.mounted = true;
    const { api } = this.props;

    this.stopListeningOnStory = api.on(STORY_CHANGED, () => {
      const { kind, storyName, coverageData } = this.state;
      if (this.mounted && (kind || storyName || coverageData)) {
        this.onAddCoverage({});
      }
    });

    api.on(ADD_COVERAGE, this.onAddCoverage);
  }

  componentWillUnmount() {
    this.mounted = false;
    const { api } = this.props;

    this.stopListeningOnStory();
    api.off(ADD_COVERAGE, this.onAddCoverage);
  }

  onAddCoverage = ({ kind, storyName, coverageData, passThreshold, failThreshold }) => {
    this.setState({ kind, storyName, coverageData, passThreshold, failThreshold });
  };

  render() {
    const { active } = this.props;
    const { coverageData, failThreshold, passThreshold } = this.state;

    return active ? <Component failThreshold={failThreshold} passThreshold={passThreshold} coverageData={coverageData} /> : null;
  }
};

export default provideCoverage;