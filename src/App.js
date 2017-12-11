import React, { Component } from 'react';
import './App.css';
import { scaleLinear } from 'd3-scale';
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3v4';
import { max } from 'd3-array';
import { select } from 'd3-selection';

var data = {
  nodes: [
    { id: 'wgd', label: 'War God Descendant' },
    { id: 'loip', label: 'League of Iron Preparation' },
    { id: 'twtt', label: 'Tiger Warrior Training Technique' },
    { id: 'icp', label: "Immortal Commander's Presence" },
    { id: 'rsg', label: 'Rout-Stemming Gesture' },
    { id: 'motui', label: 'Magnanimity of the Unstoppable Icon' },
    { id: 'motr', label: 'March of the Returner' },
    { id: 'sotda', label: 'Supremacy of the Divine Army' },
    { id: 'hbu', label: 'Holistic Battle Understanding' },
    { id: 'rrg', label: 'Redoubt-Raising Gesture' },
    { id: 'gotass', label: 'General of the All-Seeing Sun' },
    { id: 'fgm', label: 'Four Glories Meditation' },
    { id: 'owff', label: 'One With Five Forces' },
    { id: 'usc', label: 'Unstoppable Solar Conqueror' },
    { id: 'ibkp', label: 'Ideal Battle Knowledge Prana' },
    { id: 'bpa', label: 'Battle Path Ascendant' },
    { id: 'iwt', label: "Immortal Warlord's Tactic" },
    { id: 'twg', label: "Transcendant Warlord's Genius" },
    { id: 'bvf', label: "Battle-Visionary's Foresight" },
  ],
  edges: [
    { from: 'wgd', to: 'loip' },
    { from: 'wgd', to: 'icp' },
    { from: 'wgd', to: 'rsg' },
    { from: 'wgd', to: 'hbu' },
    { from: 'loip', to: 'twtt' },
    { from: 'rsg', to: 'motui' },
    { from: 'hbu', to: 'rrg' },
    { from: 'hbu', to: 'usc' },
    { from: 'motui', to: 'motr' },
    { from: 'motr', to: 'sotda' },
    { from: 'rrg', to: 'gotass' },
    { from: 'gotass', to: 'fgm' },
    { from: 'fgm', to: 'owff' },
    { from: 'ibkp', to: 'bpa' },
    { from: 'ibkp', to: 'iwt' },
    { from: 'bpa', to: 'twg' },
    { from: 'twg', to: 'bvf' },
    { from: 'gotass', to: 'bvf' },
  ],
};

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.createBarChart = this.createBarChart.bind(this);
  }
  componentDidMount() {
    this.createBarChart();
  }
  componentDidUpdate() {
    this.createBarChart();
  }
  createBarChart() {
    var g = new dagreD3.graphlib.Graph().setGraph({});
    data.nodes.forEach(function(charm) {
      g.setNode(charm.id, { label: charm.label });
    });
    data.edges.forEach(function(edge) {
      g.setEdge(edge.from, edge.to, { label: '' });
    });
    const node = this.node;
    var svg = d3.select(node),
      inner = svg.select('g');
    // Set up zoom support
    // var zoom = d3.behavior.zoom().on('zoom', function() {
    //   inner.attr(
    //     'transform',
    //     'translate(' +
    //       d3.event.translate +
    //       ')' +
    //       'scale(' +
    //       d3.event.scale +
    //       ')',
    //   );
    // });
    // svg.call(zoom);
    // Create the renderer
    var render = new dagreD3.render();
    // Run the renderer. This is what draws the final graph.
    render(inner, g);
    // Center the graph
    var initialScale = 0.75;
    // zoom
    //   .translate([(svg.attr('width') - g.graph().width * initialScale) / 2, 20])
    //   .scale(initialScale)
    //   .event(svg);
    svg.attr('height', g.graph().height * initialScale + 40);
  }
  render() {
    return (
      <svg ref={node => (this.node = node)} width={500} height={500}>
        <g />
      </svg>
    );
  }
}

export default BarChart;
