import React from 'react';
import * as d3 from 'd3';
import dagreD3 from 'dagre-d3';
import { withFauxDOM } from 'react-faux-dom';

class MyReactComponent extends React.Component {
  componentDidMount() {
    const faux = this.props.connectFauxDOM('div', 'chart');
    var g = new dagreD3.graphlib.Graph().setGraph({});
    var states = [
      'War God Descendant',
      'League of Iron Preparation',
      'Tiger Warrior Training Technique',
    ];
    var war = {
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

    // pass node/edge data into the graph
    war.nodes.forEach(function(charm) {
      g.setNode(charm.id, { label: charm.label });
    });
    war.edges.forEach(function(edge) {
      g.setEdge(edge.from, edge.to, { label: '' });
    });

    // Set some general styles
    g.nodes().forEach(function(v) {
      var node = g.node(v);
      //node.rx = node.ry = 5;
    });

    // Add some custom colors based on state
    //g.node('CLOSED').style = "fill: #f77";
    //g.node('ESTAB').style = "fill: #7f7";

    var svg = d3.select(faux),
      inner = svg.select('g');

    // Set up zoom support
    var zoom = d3.behavior.zoom().on('zoom', function() {
      inner.attr(
        'transform',
        'translate(' +
          d3.event.translate +
          ')' +
          'scale(' +
          d3.event.scale +
          ')',
      );
    });
    svg.call(zoom);

    // Create the renderer
    var render = new dagreD3.render();

    // Run the renderer. This is what draws the final graph.
    render(inner, g);

    // Center the graph
    var initialScale = 0.75;
    zoom
      .translate([(svg.attr('width') - g.graph().width * initialScale) / 2, 20])
      .scale(initialScale)
      .event(svg);
    svg.attr('height', g.graph().height * initialScale + 40);
  }

  render() {
    return (
      <div>
        <h2>Here is some fancy data:</h2>
        <div className="renderedD3">{this.props.chart}</div>
      </div>
    );
  }
}

MyReactComponent.defaultProps = {
  chart: 'loading',
};

export default withFauxDOM(MyReactComponent);
