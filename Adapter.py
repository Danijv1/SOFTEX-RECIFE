class Galinha:
    
    def request(self) -> str:
        return "A galinha cisca."


class AdaptadorPato:
   
    def specific_request(self) -> str:
        return ".acsic oãn otap O"


class AdaptadorPatoDemo(Galinha, AdaptadorPato):

    def request(self) -> str:
        return f"AdaptadorPatoDemo: (TRANSLATED) {self.specific_request()[::-1]}"


def client_code(galinha: "Galinha") -> None:
    
    print(galinha.request(), end="")


if __name__ == "__main__":
    print("Client: Consigo trabalhar com o objeto Galinha:")
    galinha = Galinha()
    client_code(galinha)
    print("\n")

    adaptadorPato = AdaptadorPato()
    print("Client: O AdaptadorPato é muito esquisito. "
          "Eu não entendo:")
    print(f"AdaptadorPato: {adaptadorPato.specific_request()}", end="\n\n")

    print("Client: Mas eu posso trabalhar via ApatadorPatoDemo:")
    adaptadorPatoDemo = AdaptadorPatoDemo()
    client_code(adaptadorPatoDemo)
