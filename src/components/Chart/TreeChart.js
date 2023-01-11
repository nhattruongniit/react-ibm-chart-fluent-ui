import React from 'react'
import {Treemap} from 'react-vis';

const data = {
  title: "",
  color: 2,
  children: [
    {
      name: "Tag0",
      size: 1000,
      roi: 100,
      color: 0.1,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag1",
      size: 700,
      roi: 10,
      color: 0.2,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag2",
      size: 500,
      color: 0.3,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag3",
      size: 400,
      color: 0.4,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag5",
      size: 444.37300737787734,
      color: 0.8349458157063017,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag6",
      size: 658.8579476080531,
      color: 0.3842257406964278,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag7",
      size: 637.6464859547295,
      color: 0.1357672082405208,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag8",
      size: 0.04857871318275642,
      color: 0.09346010777447433,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag9",
      size: 636.6233476867076,
      color: 0.8519857446942287,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag10",
      size: 496.680620949135,
      color: 0.7490130786369091,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag11",
      size: 234.09628656554315,
      color: 0.6410532148124419,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag12",
      size: 367.01175664643324,
      color: 0.054366463800553655,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag13",
      size: 673.1623393916067,
      color: 0.22183341973308623,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag14",
      size: 675.2312445422673,
      color: 0.7714319608298705,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag15",
      size: 950.2374655086428,
      color: 0.6278697953136685,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag16",
      size: 231.08677977592927,
      color: 0.7844144494078804,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag17",
      size: 117.34580152145502,
      color: 0.3367483024202691,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag18",
      size: 660.7967471184186,
      color: 0.18629596413975058,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    },
    {
      name: "Tag19",
      size: 321,
      color: 0.27417164512876857,
      style: {
        backgroundColor: "rgb(0, 174, 239)",
        border: "thin solid rgb(37 190 247)"
      }
    }
  ]
};

function _getRandomData(total) {
  const totalLeaves = total || Math.random() * 20;
  const leaves = [];
  for (let i = 0; i < totalLeaves; i++) {
    leaves.push({
      name: `Tag${i}`,
      size: Math.random() * 1000,
      color: Math.random(),
      style: {
        border: "thin solid red"
      }
    });
  }
  return {
    title: "",
    color: 1,
    children: leaves
  };
}

export default class TreeMap extends React.Component {
  state = {
    hoveredNode: false,
    treemapData: _getRandomData(20),
    useCirclePacking: false
  };

  render() {
    console.log("", { ...this.state.treemapData });

    const treeProps = {
      hideRootNode: true,
      animation: {
        damping: 9,
        stiffness: 300
      },
      // data: this.state.treemapData,
      data: data,
      onLeafClick: (...args) => {
        console.log("onLeafClick", args);
        this.setState({ treemapData: _getRandomData() });
      },
      mode: this.state.useCirclePacking ? "circlePack" : "squarify",
      getLabel: (x) => (
        <h2>
          {x.name}
        </h2>
      ),
      maxWidth: 500,
      height: 300,
      // colorRange: ["#FF5D28", "#FF9833"],
      colorRange: ["green", "red"]
      // sortFunction: (a, b) => b.value - a.value,
      // sortFunction: (a, b) => a.value - b.value
    };

    // console.log(treeProps);

    return (
      <div className="treemapVis">
        <Treemap {...treeProps} />
      </div>
    );
  }
}