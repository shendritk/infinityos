import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "../styles/CalculatorStyles";

function Calculator(props) {
  const { closeCalculator } = props;
  const classes = useStyles(props);
  const [result, setResult] = useState(0);
  const [info, setInfo] = useState("");
  const [currentOperation, setCurrentOperation] = useState("");
  const [operand, setOperand] = useState(0);
  const [number, setNumber] = useState("");

  const clearState = () => {
    // Reset everything
    setResult(0);
    setInfo("");
    setCurrentOperation("");
    setOperand(0);
    setNumber("");
  };

  const changeSign = () => {
    if (operand === 0) {
      if (parseInt(number) < 0) {
        const n = number.split("").slice(1).join("");
        setInfo(n);
        setNumber(n);
      } else {
        setNumber(`-${number}`);
        setInfo(`(-${number}) ${currentOperation} `);
      }
    } else {
      setNumber(`-${number}`);
      const arr = info.split("");
      setInfo(
        `${arr.slice(0, arr.length - number.length).join("")} (-${number})`
      );
    }
  };

  const handleNumberClick = (e) => {
    const num = e.target.textContent;
    setNumber(`${number}${num}`);
    setInfo(`${info}${num}`);
  };

  useEffect(() => {
    if (currentOperation === "=") {
      setInfo(`${result}`);
    }
  }, [number]);

  const handleOperationClick = (e) => {
    const op = e.target.textContent;
    if (currentOperation === op) return;
    if (op !== "+/-") setInfo(`${info} ${op} `);

    switch (op) {
      case "C":
      case "CE":
        clearState();
        break;
      case "+/-":
        changeSign();
        break;
      case "=":
        calculateResult();
        break;
      case "+":
        if (currentOperation === "=") {
          setCurrentOperation("+");
          calculateResult();
          break;
        }

        setOperand(parseFloat(number));
        setCurrentOperation(op);
        setNumber("");
        break;
      case "-":
        if (currentOperation === "=") {
          setCurrentOperation("-");
          calculateResult();
          break;
        }
        setOperand(parseFloat(number));
        setCurrentOperation(op);
        setNumber("");
        break;
      case "*":
        if (currentOperation === "=") {
          setCurrentOperation("*");
          calculateResult();
          break;
        }
        setOperand(parseFloat(number));
        setCurrentOperation(op);
        setNumber("");
        break;
      case "/":
        if (currentOperation === "=") {
          setCurrentOperation("/");
          calculateResult();
          break;
        }
        setOperand(parseFloat(number));
        setCurrentOperation(op);
        setNumber("");
        break;
      case "%":
        if (currentOperation === "=") {
          setCurrentOperation("%");
          calculateResult();
          break;
        }
        setOperand(parseFloat(number));
        setCurrentOperation(op);
        setNumber("");
        break;

      case ".":
        setNumber(`${number}.`);
        break;
    }
  };

  const calculateResult = () => {
    const secondOperand = parseFloat(number);
    switch (currentOperation) {
      case "+":
        setResult(operand + secondOperand);
        setNumber("");
        setCurrentOperation("=");
        setOperand(operand + secondOperand);
        break;
      case "-":
        setResult(operand - secondOperand);
        setNumber("");
        setCurrentOperation("=");
        setOperand(operand - secondOperand);
        break;
      case "/":
        setResult(operand / secondOperand);
        setNumber("");
        setCurrentOperation("=");
        setOperand(operand / secondOperand);
        break;
      case "*":
        setResult(operand * secondOperand);
        setNumber("");
        setCurrentOperation("=");
        setOperand(operand * secondOperand);
        break;
      case "%":
        setResult(operand % secondOperand);
        setNumber("");
        setCurrentOperation("=");
        setOperand(operand % secondOperand);
        break;
    }
  };

  return (
    <Draggable>
      <div className={classes.root}>
        <div className={classes.top}>
          <CloseIcon fontSize="medium" onClick={closeCalculator} />
          <div className={classes.top__text}>
            <span>{info}</span>
            <span>
              {result.toString().length > 5
                ? parseFloat(result.toString().split("").slice(0, 6).join(""))
                : result}
            </span>
          </div>
        </div>
        <div className={classes.bottom}>
          <div onClick={handleOperationClick}>C</div>
          <div onClick={handleOperationClick}>CE</div>
          <div onClick={handleOperationClick}>%</div>
          <div onClick={handleOperationClick}>*</div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            7
          </div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            8
          </div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            9
          </div>
          <div onClick={handleOperationClick}>/</div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            4
          </div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            5
          </div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            6
          </div>
          <div onClick={handleOperationClick}>-</div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            1
          </div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            2
          </div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            3
          </div>
          <div onClick={handleOperationClick}>+</div>
          <div onClick={handleOperationClick}>+/-</div>
          <div className={classes.bottom__number} onClick={handleNumberClick}>
            0
          </div>
          <div onClick={handleOperationClick}>.</div>
          <div onClick={handleOperationClick}>=</div>
        </div>
      </div>
    </Draggable>
  );
}

export default Calculator;
