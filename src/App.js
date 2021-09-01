import './App.css';
import QuizInterface from "./components/QuizInterface";
import React from "react";
import Navbar from "./components/Navbar";
import LoadingText from "./components/LoadingText";

function getShuffledArray(array, newValue) {
    const index = Math.floor(Math.random() * (array.length + 1));
    array.splice(index, 0, newValue);
    for (let i = 0; i < array.length; i++)
        array[i] = array[i].replaceAll("&#039;", "'").replaceAll("&amp;", "&").replaceAll("&quot;", '"')
    return array
}

function getQuizInterface(quizData) {
    return quizData.results.map(data =>
        <QuizInterface quizSize={quizData.results.length}
                       id={quizData.results.indexOf(data)}
                       question={data.question.replaceAll("&#039;", "'").replaceAll("&amp;", "&").replaceAll("&quot;", '"')}
                       correct={data.correct_answer.replaceAll("&#039;", "'").replaceAll("&amp;", "&").replaceAll("&quot;", '"')}
                       options={getShuffledArray(data.incorrect_answers, data.correct_answer)}/>);
}

const scoreStyle = {
    color: '#fff',
    right: 16,
    top: 8,
    marginTop: 8,
    float: 'right',
    background: 'rgba(68,173,41,0.6)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 80,
    position: 'sticky'
}

export default class App extends React.Component {
    state = {
        loading: true,
        quiz: null
    };

    async componentDidMount() {
        const url = "https://opentdb.com/api.php?amount=10";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({quiz: data, loading: false});
    }

    render() {
        return (
            <>
                <Navbar/>
                <div>
                    {this.state.loading || !this.state.quiz ? (
                        <div className="container">
                            <LoadingText/>
                        </div>
                    ) : (
                        <div>
                            <h6 style={scoreStyle} id='score'>Score: 0/{this.state.quiz.results.length}</h6>
                            {getQuizInterface(this.state.quiz)}
                        </div>
                    )}
                </div>
            </>
        )
    }
}