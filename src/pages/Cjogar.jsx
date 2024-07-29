import Nav from "../components/NavB"

function Cjogar() {
    return (
        <>
            <Nav />
            <h3 className="passos">1. Embaralhe</h3>
            <ul className="lista">
                <img src="passo1.jpg" className="fts" />
                <li>
                    <p className="descricao">Embaralhe as cartas e entregue sete a cada jogador. Embaralhe bem todas as 108 cartas
                        de Uno. Depois, entregue sete cartas a cada pessoa e peça para todo mundo deixar as
                        mãos viradas para baixo.
                    </p>
                </li>
            </ul>
            <h3 className="passos">2. Coloque na mesa</h3>
            <ul className="lista">
                <img src="passo2.jpg" className="fts" />
                <li>
                    <p className="descricao">Coloque o resto do baralho virado para baixo no meio da mesa.
                        Os jogadores que precisarem sacar durante a rodada vão usar as cartas que estão nele.
                    </p>
                </li>
            </ul>
            <h3 className="passos">3. puxe uma carta do baralho</h3>
            <ul className="lista">
                <img src="passo3.jpg" className="fts" />
                <li>
                    <p className="descricao">
                        Vire a primeira carta do baralho para começar a partida. Coloque essa primeira carta
                        ao lado do baralho, mas virada para cima. Ela vai orientar o início da partida e ser
                        a base de uma segunda pilha.
                    </p>
                </li>
            </ul>
            <h3 className="passos">4. distribua as cartas</h3>
            <ul className="lista">
                <img src="passo4.jpg" className="fts" />
                <li>
                    <p className="descricao">
                        dê 7 cartas para cada jogador, mantendo-as viradas para baixo.
                    </p>
                </li>
            </ul>
            <h3 className="passos">5. Ordem de jogadas</h3>
            <ul className="lista">
                <img src="passo5.jpg" className="fts" />
                <li>
                    <p className="descricao">
                        Coloque na mesa uma carta sua que tenha o mesmo número ou símbolo ou a mesma cor que
                        a que já está virada. O jogador à esquerda de quem começou pode descartar uma carta
                        cujo número, símbolo ou cor seja semelhante ao da que foi descartada por último. Peça
                        para ele colocar o item em cima dessa pilha. Depois, a próxima pessoa também pode jogar
                    </p>
                </li>
            </ul>
            <h3 className="passos">6. Compre mais</h3>
            <ul className="lista">
                <img src="passo6.jpg" className="fts" />
                <li>
                    <p className="descricao">
                        Saque uma carta do baralho de reserva se você não tiver nenhuma que corresponda à que está
                        na mesa. Se a sua vez chegar e você não tiver nenhuma carta que sirva, saque uma do baralho.
                        Jogue-a imediatamente se ela tiver o número, o símbolo ou a cor ideal ou guarde-a se ela
                        também não servir
                    </p>
                </li>
            </ul>
            <h3 className="passos">7. Cartas especiais</h3>
            <ul className="lista">
                <img src="passo7.jpg" className="fts" />
                <li>
                    <p className="descricao">
                        Preste atenção às cartas de ação e às especiais. Além das cartas básicas, com números 
                        e cores, o Uno envolve três cartas de ação. Se você usar uma carta especial, pode 
                        escolher a cor da rodada seguinte; se usar um "Comprar duas cartas", o próximo jogador
                        deve sacar duas cartas e passar a vez; se usar a "Reverter", a ordem da rodada é 
                        invertida (e a pessoa que veio antes de você é obrigada a ir de novo).
                    </p>
                </li>
            </ul>
            <h3 className="passos">8. Gritar UNO</h3>
            <ul className="lista">
                <img src="passo8.jpg" className="fts" />
                <li>
                    <p className="descricao">
                    Diga "Uno" quando você só tiver uma carta na mão. Continue alternando com os demais 
                    jogadores até alguém ficar só com uma carta. Nesse ponto, essa pessoa tem que dizer 
                    "Uno" — ou é penalizada caso seja pega no flagra.
                    </p>
                </li>
            </ul>
            <h3 className="passos">9. Vencer</h3>
            <ul className="lista">
                <img src="passo9.jpg" className="fts" />
                <li>
                    <p className="descricao">
                    Jogue a última carta para vencer a rodada. Quando você só tiver uma carta (e já tiver 
                    dito "Uno"), espere mais uma rodada. Se a sua última carta combinar com a que está no 
                    topo da pilha, parabéns! Você venceu!
                    </p>
                </li>
            </ul>

        </>
    )
}

export default Cjogar