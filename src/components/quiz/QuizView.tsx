import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../data/quizzes';
import { QuizQuestion, Century } from '../../types';
import { StorageService } from '../../services/storage';
import { CheckCircle2, XCircle, Award, RotateCcw, ArrowRight, HelpCircle, Sparkles } from 'lucide-react';

export const QuizView: React.FC = () => {
  const [selectedCentury, setSelectedCentury] = useState<number | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  // Filter pool
  const questions: QuizQuestion[] = QUIZ_QUESTIONS.filter((q) => {
    if (selectedCentury !== 'all' && q.century !== selectedCentury) {
      return false;
    }
    return true;
  });

  const currentQ: QuizQuestion | undefined = questions[currentIndex] || questions[0];

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleValidateAnswer = () => {
    if (selectedAnswer === null || !currentQ) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    } else {
      setIsQuizCompleted(true);
      const finalScore = score + (selectedAnswer === currentQ.correctIndex ? 0 : 0);
      StorageService.saveQuizScore(`century_${selectedCentury}`, score, questions.length);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsQuizCompleted(false);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Editorial Header */}
      <div className="border-b border-[#D9CBB7]/40 pb-6 text-center md:text-left">
        <span className="text-xs font-semibold tracking-widest text-[#77736D] uppercase font-sans">
          Jeu & Érudition Historique
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242321] mt-1">
          Le Grand Quiz de la Mode Française
        </h2>
        <p className="text-sm text-[#77736D] max-w-2xl mt-2 leading-relaxed">
          Testez vos connaissances sur l'évolution des silhouettes, les inventions techniques de sous-structures et les grands créateurs de l'histoire.
        </p>

        {/* Century Filter Buttons */}
        <div className="mt-5 flex items-center justify-center md:justify-start gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {['all', 16, 17, 18, 19, 20, 21].map((c) => (
            <button
              key={c}
              onClick={() => {
                setSelectedCentury(c === 'all' ? 'all' : Number(c));
                handleRestart();
              }}
              className={`px-3 py-1 text-xs rounded-md transition-colors whitespace-nowrap ${
                selectedCentury === c
                  ? 'bg-[#242321] text-white font-medium'
                  : 'bg-white text-[#77736D] hover:text-[#242321] border border-[#D9CBB7]/40'
              }`}
            >
              {c === 'all' ? 'Tous les siècles' : `${c}e siècle`}
            </button>
          ))}
        </div>
      </div>

      {!isQuizCompleted ? (
        currentQ ? (
          <div className="bg-white rounded-2xl border border-[#D9CBB7]/60 p-6 md:p-8 shadow-sm space-y-6">
            {/* Question Progress bar & Meta */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-[#77736D]">
                <span className="font-semibold text-[#9A3412] uppercase tracking-wider">
                  Question {currentIndex + 1} sur {questions.length}
                </span>
                <span className="font-mono text-[#242321]">
                  Score actuel : {score} point{score > 1 ? 's' : ''}
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#F7F4ED] rounded-full overflow-hidden border border-[#D9CBB7]/30">
                <div
                  className="h-full bg-[#242321] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[11px] text-[#77736D]">
                <span className="inline-block bg-[#F7F4ED] text-[#242321] px-2 py-0.5 rounded border border-[#D9CBB7]/40">
                  {currentQ.century ? `${currentQ.century}e siècle` : 'Général'}
                </span>
                <span>·</span>
                <span className="capitalize">{currentQ.category}</span>
                <span>·</span>
                <span>Niveau : {currentQ.difficulty}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-serif font-bold text-[#242321] leading-snug">
                {currentQ.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-2.5">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let stateClasses = 'bg-[#F7F4ED]/60 border-[#D9CBB7]/60 text-[#242321] hover:bg-[#D9CBB7]/20';
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    stateClasses = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium';
                  } else if (isSelected) {
                    stateClasses = 'bg-rose-50 border-rose-400 text-rose-950';
                  } else {
                    stateClasses = 'opacity-50 border-[#D9CBB7]/30 text-[#77736D]';
                  }
                } else if (isSelected) {
                  stateClasses = 'bg-[#242321] text-white border-[#242321] font-medium shadow-sm';
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-xs md:text-sm transition-all flex items-center justify-between gap-3 ${stateClasses}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/80 border border-current flex items-center justify-center text-xs font-bold shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{option}</span>
                    </div>

                    {isAnswerSubmitted && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Historical Feedback Box when answered */}
            {isAnswerSubmitted && (
              <div className="bg-[#F7F4ED] p-5 rounded-xl border border-[#D9CBB7]/60 space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
                  <Sparkles className="w-4 h-4 text-[#9A3412]" />
                  <span>Explication Historique :</span>
                </div>
                <p className="text-xs text-[#242321] leading-relaxed">
                  {currentQ.explanation}
                </p>

                {currentQ.historicalFact && (
                  <div className="pt-2 border-t border-[#D9CBB7]/30 text-xs text-[#77736D] italic">
                    <span className="font-semibold text-[#242321] not-italic">Le saviez-vous ? </span>
                    {currentQ.historicalFact}
                  </div>
                )}
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#D9CBB7]/40 flex items-center justify-end gap-3">
              {!isAnswerSubmitted ? (
                <button
                  disabled={selectedAnswer === null}
                  onClick={handleValidateAnswer}
                  className="px-6 py-2.5 bg-[#242321] text-white text-xs font-semibold rounded-lg hover:bg-[#3A3835] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Valider la réponse
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-2.5 bg-[#9A3412] text-white text-xs font-semibold rounded-lg hover:bg-[#78350F] transition-colors flex items-center gap-2"
                >
                  <span>{currentIndex < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="py-16 text-center text-[#77736D] bg-white rounded-xl border border-[#D9CBB7]/40 p-8">
            <p>Aucune question disponible pour ce filtre de siècle.</p>
          </div>
        )
      ) : (
        /* Quiz Completed Screen */
        <div className="bg-white rounded-2xl border border-[#D9CBB7]/60 p-8 md:p-12 text-center space-y-6 shadow-sm">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#F7F4ED] border-2 border-[#9A3412] flex items-center justify-center text-[#9A3412]">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#77736D]">
              Bilan de vos Connaissances
            </span>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#242321]">
              Quiz Terminé !
            </h3>
            <p className="text-sm text-[#77736D]">
              Vous avez obtenu un score de :
            </p>
          </div>

          <div className="text-5xl font-serif font-bold text-[#9A3412]">
            {score} / {questions.length}
          </div>

          <div className="text-sm font-serif italic text-[#242321] max-w-md mx-auto">
            {score === questions.length
              ? 'Félicitations magistrales ! Vous êtes un véritable Conservateur en chef du costume français.'
              : score >= questions.length * 0.7
              ? 'Bravo ! Vous possédez une culture très solide de l\'histoire vestimentaire française.'
              : 'Un beau parcours documentaire ! N\'hésitez pas à consulter les fiches détaillées pour approfondir.'}
          </div>

          <div className="pt-6 border-t border-[#D9CBB7]/40 flex justify-center gap-3">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#242321] text-white text-xs font-semibold rounded-lg hover:bg-[#3A3835] transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Recommencer le quiz</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
