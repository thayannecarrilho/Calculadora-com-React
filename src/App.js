import { Container, Content, Row } from './styles'; 
import Input from './components/Input'; 
import Button from './components/Button';  
import { useState } from 'react';  

const App = () => {
  // Define o estado inicial dos números e operações
  const [currentNumber, setCurrentNumber] = useState('0');  // Número exibido atualmente
  const [firstNumber, setFirstNumber] = useState('0');  // Primeiro número para operações
  const [operation, setOperation] = useState('');  // Operação atual (+, -, x, /)

  // Função para limpar todos os valores e operações
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  // Função para limpar apenas a entrada atual
  const handleClearEntry = () => {
    setCurrentNumber('0');
  }

  // Função para adicionar números ou vírgula à entrada atual
  const handleAddNumber = (num) => {
    if (num === ',' && !currentNumber.includes('.')) {
      // Se a vírgula for pressionada e não houver um ponto decimal, substitua por um ponto decimal
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}.`);
    } else if (num !== ',') {
      // Adiciona outros números normalmente
      setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
    }
  }

  // Função para somar números
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      // Se não há um primeiro número, armazena o número atual e define a operação como soma
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      // Se já há um primeiro número, realiza a soma e exibe o resultado
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  // Função para subtrair números
  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      // Se não há um primeiro número, armazena o número atual e define a operação como subtração
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      // Se já há um primeiro número, realiza a subtração e exibe o resultado
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation('');
    }
  }

  // Função para dividir números
  const handledivNumbers = () => {
    if (firstNumber === '0') {
      // Se não há um primeiro número, armazena o número atual e define a operação como divisão
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      // Se já há um primeiro número, realiza a divisão e exibe o resultado
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation('');
    }
  }

  // Função para multiplicar números
  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      // Se não há um primeiro número, armazena o número atual e define a operação como multiplicação
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      // Se já há um primeiro número, realiza a multiplicação e exibe o resultado
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation('');
    }
  }

  // Função para calcular o resultado final com base na operação selecionada
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();  // Chama a função de soma
          break;
        case '-':
          handleSubNumbers();  // Chama a função de subtração
          break;
        case '/':
          handledivNumbers();  // Chama a função de divisão
          break;
        case 'x':
          handleMultNumbers();  // Chama a função de multiplicação
          break;
        default:
          break;
      }
    }
  }

  // Função para calcular a porcentagem
  const handlePercentage = () => {
    if (operation === '') {
      // Se não há operação, calcula a porcentagem do número atual
      const percentage = Number(currentNumber) / 100;
      setCurrentNumber(String(percentage));
    } else if (firstNumber !== '0') {
      // Se há uma operação, calcula a porcentagem em relação ao primeiro número e à operação
      const percentage = (Number(currentNumber) / 100) * Number(firstNumber);
      setCurrentNumber(String(percentage));
      setOperation('');
    }
  }

  return (
    <div className="App">
      <Container>
        <Content>
          <Input value={currentNumber} />  {/* Exibe o número atual */}
          <Row>
            <Button label="%" onClick={handlePercentage} />  {/* Botão de porcentagem */}
            <Button label="CE" onClick={handleClearEntry} />  {/* Botão de limpar entrada */}
            <Button label="C" onClick={handleOnClear} />  {/* Botão de limpar tudo */}
            <Button label="/" onClick={handledivNumbers} />  {/* Botão de divisão */}
          </Row>
          <Row>
            <Button label="7" onClick={() => handleAddNumber('7')} />  {/* Botão de número 7 */}
            <Button label="8" onClick={() => handleAddNumber('8')} />  {/* Botão de número 8 */}
            <Button label="9" onClick={() => handleAddNumber('9')} />  {/* Botão de número 9 */}
            <Button label="x" onClick={handleMultNumbers} />  {/* Botão de multiplicação */}
          </Row>
          <Row>
            <Button label="4" onClick={() => handleAddNumber('4')} />  {/* Botão de número 4 */}
            <Button label="5" onClick={() => handleAddNumber('5')} />  {/* Botão de número 5 */}
            <Button label="6" onClick={() => handleAddNumber('6')} />  {/* Botão de número 6 */}
            <Button label="-" onClick={handleSubNumbers} />  {/* Botão de subtração */}
          </Row>
          <Row>
            <Button label="1" onClick={() => handleAddNumber('1')} />  {/* Botão de número 1 */}
            <Button label="2" onClick={() => handleAddNumber('2')} />  {/* Botão de número 2 */}
            <Button label="3" onClick={() => handleAddNumber('3')} />  {/* Botão de número 3 */}
            <Button label="+" onClick={handleSumNumbers} />  {/* Botão de adição */}
          </Row>
          <Row>
            <Button label="+/-" onClick={() => handleAddNumber('-')} />  {/* Botão de mudança de sinal */}
            <Button label="0" onClick={() => handleAddNumber('0')} />  {/* Botão de número 0 */}
            <Button label="," onClick={() => handleAddNumber(',')} />  {/* Botão de vírgula (ponto decimal) */}
            <Button label="=" onClick={handleEquals} />  {/* Botão de igual */}
          </Row>
        </Content>
      </Container>
    </div>
  );
}

export default App;
