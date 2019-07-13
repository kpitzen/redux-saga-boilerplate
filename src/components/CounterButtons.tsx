import React from 'react';
import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { RootState } from '../reducers';
import actions from '../actions';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';


export interface CounterButtonsProps {
  counter: number
  increment: () => Action
  decrement: () => Action
  incrementAsync: () => Action
  className?: string
}


const StyledButton = styled(Button)`
  color: #eaeaea
`

const StyledText = styled.div`
  color: #514d4d
`

const CounterButtons: React.FC<CounterButtonsProps> = (props: CounterButtonsProps) => {
    return(
      <Container>
        <Row>
          <Col>
            <StyledButton className={ props.className } onClick={ props.incrementAsync }>
              Increment after 1 second
            </StyledButton>
          </Col>
          <Col>
            <StyledButton className={ props.className } onClick={ props.increment }>
              Increment
            </StyledButton>
          </Col>
          <Col>
            <StyledButton className={ props.className } onClick={ props.decrement }>
              Decrement
            </StyledButton>
          </Col>
        </Row>
        <Row>
          <StyledText className={ props.className }>Clicked: { props.counter } times</StyledText>
        </Row>
      </Container>
    )
}

const mapStateToProps = (state: RootState) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    increment: () => dispatch(actions.onIncrement),
    incrementAsync: () => dispatch(actions.onIncrementAsync),
    decrement: () => dispatch(actions.onDecrement)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterButtons);
