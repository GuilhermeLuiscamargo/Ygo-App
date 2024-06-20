## Para instalar o App

basta ir no terminal da sua IDE baixar esse repositorio e usar os comandos

-npm install

-npm run dev

  <div className="searchResultList">
        <ul className="resultsOfSearchBar">
          {cardNames.length
            ? cardNames.map((card) => {
                const attributeImg = getAtributteImg(card.attribute);
                const raceImg = getType(card.race);
                return (
                  <li key={`search=${card.id}`} className="">
                    <Link
                      href={`/card/${card.name}`}
                      onClick={() => setSearchString("")}
                    >
                      <img width="50px" src={card.img} alt={card.name} />
                      {card.name}
                      {card.attribute ? (
                        <img
                          width="20px"
                          src={attributeImg}
                          alt={card.attribute}
                        />
                      ) : null}

                      <img width="20px" src={raceImg} alt={card.race} />
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
