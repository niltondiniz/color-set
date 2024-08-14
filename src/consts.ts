// Define a type for each topic
interface Topic {
    name: string;
    attributes: Array<{ label: string; field: string, description: string }>;
    
  }
  
  // Mock data: topics with their respective fields (use your documentation para populá-los)
  export const topics: Topic[] =
    [
      {
        "name": "BottomNavigationDefault (bottomNavigator)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal."
          },
          {
            "label": "Cor de ícone padrão",
            "field": "iconDefault",
            "description": "Usada para o ícone ativo."
          },
          {
            "label": "Cor de ícone acentuado",
            "field": "iconAccent",
            "description": "Usada para os ícones inativos."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto."
          },
          {
            "label": "Cor secundária",
            "field": "secondaryColor",
            "description": "Usada como a cor de splash quando um botão é pressionado."
          }
        ]
      },
      {
        "name": "NoAppbarCustom (defaultColors)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal do app bar."
          },
          {
            "label": "Cor de ícone padrão",
            "field": "iconDefault",
            "description": "Usada para o ícone da seta para baixo."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto do título no app bar."
          }
        ]
      },
      {
        "name": "TopoCustom (topoCustom)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal do topo."
          },
          {
            "label": "Cor de ícone padrão",
            "field": "iconDefault",
            "description": "Usada para os ícones das imagens (por exemplo, stories)."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto comum."
          },
          {
            "label": "Cor de texto acentuada",
            "field": "textAccent",
            "description": "Usada para textos acentuados, como contagens e datas de validade."
          }
        ]
      },
      {
        "name": "CampanhaDetailPage (campaign)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto principal e descrições na página."
          },
          {
            "label": "Cor de botão alternativo",
            "field": "alternativeButton",
            "description": "Usada como cor de fundo para o botão de ativar/desativar campanha."
          },
          {
            "label": "Cor de botão primário",
            "field": "primaryButton",
            "description": "Usada como cor de fundo para o botão 'Ok' nos diálogos."
          },
          {
            "label": "Cor de texto do botão primário",
            "field": "primaryButtonText",
            "description": "Usada para o texto do botão 'Ok' nos diálogos."
          },
          {
            "label": "Cor de texto secundário",
            "field": "secondaryColor",
            "description": "Usada para textos destacados nos diálogos de confirmação."
          }
        ]
      },
      {
        "name": "CampanhaPage (campaign)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto principal e descrições na página."
          },
          {
            "label": "Cor de botão primário",
            "field": "primaryButton",
            "description": "Usada como cor de fundo para o botão 'OK' nos diálogos."
          },
          {
            "label": "Cor de texto do botão primário",
            "field": "primaryButtonText",
            "description": "Usada para o texto do botão 'OK' nos diálogos."
          },
          {
            "label": "Cor de texto secundário",
            "field": "secondaryColor",
            "description": "Usada para textos destacados e links (como 'Saiba mais...')."
          },
          {
            "label": "Cor de ícone padrão",
            "field": "iconDefault",
            "description": "Usada para o ícone do botão de adicionar mais itens (`MoreItensButtonWidget`)."
          }
        ]
      },
      {
        "name": "CardCampanhaOptionWidget (campaign)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal do card."
          }
        ]
      },
      {
        "name": "getTextFormated (campaign)",
        "attributes": [
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto normal."
          },
          {
            "label": "Cor de texto secundário",
            "field": "secondaryColor",
            "description": "Usada para o texto destacado (envolto em asteriscos)."
          }
        ]
      },
      {
        "name": "DownloadPage (download)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto e ícones na página."
          },
          {
            "label": "Cor de texto secundário",
            "field": "iconDefault",
            "description": "Usada para o indicador de progresso (CircularProgressIndicator) e outros textos destacados."
          }
        ]
      },
      {
        "name": "MoreItensButtonWidget (download)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo do botão de adicionar mais itens."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o ícone do botão de adicionar mais itens."
          }
        ]
      },
      {
        "name": "DownloadItem (download)",
        "attributes": [
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto principal, como o título do conteúdo."
          },
          {
            "label": "Cor de texto do formulário",
            "field": "textInputForm",
            "description": "Usada para exibir a data de download do conteúdo."
          },
          {
            "label": "Cor de texto secundário",
            "field": "textAccent",
            "description": "Usada para o link 'Baixar novamente'."
          }
        ]
      },
      {
        "name": "FaturaPage (invoice)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          }
        ]
      },
      {
        "name": "FaturaItem (invoice)",
        "attributes": [
          {
            "label": "Cor de texto padrão (Fatura em aberto)",
            "field": "textDefault",
            "description": "Usada para o texto do plano, referência e vencimento quando a fatura está em aberto."
          },
          {
            "label": "Cor de texto acentuado (Fatura paga)",
            "field": "textAccent",
            "description": "Usada para o texto do plano, referência e vencimento quando a fatura está paga."
          },
          {
            "label": "Cor primária",
            "field": "primaryColor",
            "description": "Usada para o texto 'Em aberto' quando a fatura ainda não foi paga."
          },
          {
            "label": "Cor secundária",
            "field": "secondaryColor",
            "description": "Usada para o texto indicando o pagamento quando a fatura já foi paga."
          },
          {
            "label": "Ícone PDF padrão",
            "field": "iconDefault",
            "description": "Usada para o ícone de PDF quando a fatura está em aberto."
          },
          {
            "label": "Ícone PDF acentuado",
            "field": "iconAccent",
            "description": "Usada para o ícone de PDF quando a fatura está paga."
          },
          {
            "label": "Texto PDF padrão",
            "field": "textDefault",
            "description": "Usada para o texto 'Ver fatura' quando a fatura está em aberto."
          },
          {
            "label": "Texto PDF acentuado",
            "field": "textAccent",
            "description": "Usada para o texto 'Ver fatura' quando a fatura está paga."
          }
        ]
      },
      {
        "name": "FavoritePage (favorites)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para textos na página, como mensagens de diálogo."
          },
          {
            "label": "Cor de texto secundário",
            "field": "secondaryColor",
            "description": "Usada para textos destacados no diálogo de remoção de favoritos."
          },
          {
            "label": "Cor de botão primário",
            "field": "primaryButton",
            "description": "Usada como cor de fundo para o botão 'Sim' no diálogo de remoção de favoritos."
          },
          {
            "label": "Cor de texto do botão primário",
            "field": "primaryButtonText",
            "description": "Usada para o texto do botão 'Sim' no diálogo de remoção de favoritos."
          }
        ]
      },
      {
        "name": "FindPage (find)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          }
        ]
      },
      {
        "name": "HomePage (home)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          },
          {
            "label": "Cor de fundo alternativa",
            "field": "alternativeBackground",
            "description": "Usada como a cor de fundo alternativa em certas seções da página, como o topo."
          }
        ]
      },
      {
        "name": "LockPage (lock)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para todos os textos da página."
          },
          {
            "label": "Cor de botão primário",
            "field": "primaryButtonColors",
            "description": "Usada como a cor de fundo do botão 'Desbloquear'."
          },
          {
            "label": "Cor de texto do botão primário",
            "field": "primaryButtonText",
            "description": "Usada para o texto do botão 'Desbloquear'."
          }
        ]
      },
      {
        "name": "campaignContentWidget (homeCampaign)",
        "attributes": [
          {
            "label": "Cor de fundo alternativa",
            "field": "alternativeBackground",
            "description": "Usada como a cor de fundo da seção de campanha ativa."
          },
          {
            "label": "Cor de texto acentuada",
            "field": "textAccent",
            "description": "Usada para os textos 'CAMPANHA' e 'ATIVA'."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto 'Desativar'."
          },
          {
            "label": "Cor secundária",
            "field": "secondaryColor",
            "description": "Usada para o ícone de camadas e o texto 'Desativar campanha' no diálogo de confirmação."
          },
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo do diálogo de confirmação de desativação de campanha."
          },
          {
            "label": "Cor de botão primário",
            "field": "primaryButton",
            "description": "Usada como a cor de fundo do botão 'Sim' no diálogo de desativação de campanha."
          },
          {
            "label": "Cor de texto do botão primário",
            "field": "primaryButtonText",
            "description": "Usada para o texto do botão 'Sim' no diálogo de desativação de campanha."
          }
        ]
      },
      {
        "name": "CardConteudo (home)",
        "attributes": [
          {
            "label": "Cor secundária",
            "field": "secondaryColor",
            "description": "Usada como a cor de fundo da borda do card e do selo 'Grátis'."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto 'Grátis'."
          }
        ]
      },
      {
        "name": "ConteudoResult (home)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo do card."
          },
          {
            "label": "Cor secundária",
            "field": "secondaryColor",
            "description": "Usada para o selo 'G' que indica conteúdo grátis."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto do selo 'G'."
          }
        ]
      },
      {
        "name": "FindResultsWidget (find)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da seção de resultados."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para os textos na seção de resultados, como 'Resultados da busca:' e 'Limpar busca'."
          },
          {
            "label": "Cor de ícone padrão",
            "field": "iconDefault",
            "description": "Usada para o ícone do botão de adicionar mais resultados."
          }
        ]
      },
      {
        "name": "ParentTagsArea (find)",
        "attributes": [
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto dos tags de busca."
          }
        ]
      },
      {
        "name": "HorizontalLine (find)",
        "attributes": [
          {
            "label": "Cor de texto padrão",
            "field": "darkBackground",
            "description": "Usada para a linha horizontal que separa as áreas de tags."
          }
        ]
      },
      {
        "name": "NewContentWidget (homeNewContent)",
        "attributes": [
          {
            "label": "Cor de fundo alternativa",
            "field": "alternativeBackground",
            "description": "Usada como a cor de fundo da seção de conteúdo novo."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto 'CONTEÚDO NOVO'."
          }
        ]
      },
      {
        "name": "PreviousContentWidget (home)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo da seção de publicações anteriores e do ícone de atualização."
          },
          {
            "label": "Cor secundária",
            "field": "secondaryColor",
            "description": "Usada para o indicador de progresso (CircularProgressIndicator) ao carregar publicações anteriores."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto 'Publicações Anteriores:'."
          }
        ]
      },
      {
        "name": "TagWidget (find)",
        "attributes": [
          {
            "label": "Cor de Fundo do Container Selecionado",
            "field": "secondaryColor",
            "description": "Usada como a cor de fundo do container quando o widget está selecionado."
          },
          {
            "label": "Cor da Borda do Container Não Selecionado",
            "field": "secondaryColor",
            "description": "Usada como a cor da borda do container quando o widget não está selecionado."
          },
          {
            "label": "Cor do Ícone Selecionado",
            "field": "iconDefault",
            "description": "Usada como a cor do ícone quando o widget está selecionado."
          },
          {
            "label": "Cor do Ícone Não Selecionado",
            "field": "iconAccent",
            "description": "Usada como a cor do ícone quando o widget não está selecionado."
          },
          {
            "label": "Cor do Texto Selecionado",
            "field": "textDefault",
            "description": "Usada como a cor do texto quando o widget está selecionado."
          },
          {
            "label": "Cor do Texto Não Selecionado",
            "field": "textAccent",
            "description": "Usada como a cor do texto quando o widget não está selecionado."
          }
        ]
      },
      {
        "name": "LoginPage (login)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto principal, como 'Bem vindo!', instruções e versão do app."
          },
          {
            "label": "Cor de texto acentuada",
            "field": "textAccent",
            "description": "Usada para o link 'Perdeu a senha?'."
          },
          {
            "label": "Cor de ícone do formulário",
            "field": "iconInputForm",
            "description": "Usada para os ícones dos campos de login e senha."
          },
          {
            "label": "Cor de texto do formulário",
            "field": "textInputForm",
            "description": "Usada para o texto dentro dos campos de login e senha."
          },
          {
            "label": "Cor de fundo do formulário",
            "field": "bgInputForm",
            "description": "Usada como a cor de fundo dos campos de login e senha."
          },
          {
            "label": "Cor de botão primário",
            "field": "primaryButtonColors",
            "description": "Usada como a cor de fundo do botão 'Login'."
          },
          {
            "label": "Cor de texto do botão primário",
            "field": "primaryButtonText",
            "description": "Usada para o texto do botão 'Login'."
          }
        ]
      },
      {
        "name": "RecuverPage (defaultColors)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto das instruções e do rótulo do campo de e-mail."
          },
          {
            "label": "Cor de texto do formulário",
            "field": "textInputFormLongText",
            "description": "Usada para o texto dentro do campo de e-mail."
          },
          {
            "label": "Cor de fundo do formulário",
            "field": "bgInputForm",
            "description": "Usada como a cor de fundo do campo de e-mail."
          },
          {
            "label": "Cor de botão primário",
            "field": "primaryButton",
            "description": "Usada como a cor de fundo do botão 'Enviar nova senha'."
          },
          {
            "label": "Cor de texto do botão primário",
            "field": "primaryButtonText",
            "description": "Usada para o texto do botão 'Enviar nova senha'."
          }
        ]
      },
      {
        "name": "PerfilPage (profile)",
        "attributes": [
          {
            "label": "Cor de fundo escura",
            "field": "darkBackground",
            "description": "Usada como a cor de fundo principal da página."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto dos botões no menu do perfil, como 'Sair', 'Suporte' e 'Fatura'."
          }
        ]
      },
      {
        "name": "AppBarPerfil (profile)",
        "attributes": [
          {
            "label": "Cor de fundo alternativa",
            "field": "alternativeBackground",
            "description": "Usada como a cor de fundo do `AppBar`."
          },
          {
            "label": "Cor de sombra",
            "field": "darkBackground",
            "description": "Usada como a cor da sombra do `AppBar`."
          }
        ]
      },
      {
        "name": "MenuPerfilBotton (profile)",
        "attributes": [
          {
            "label": "Cor de botão primário",
            "field": "primaryButton",
            "description": "Usada como a cor de fundo do botão do menu de perfil."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto do botão do menu de perfil."
          },
          {
            "label": "Cor de ícone padrão",
            "field": "iconDefault",
            "description": "Usada para o ícone do botão do menu de perfil, se um ícone personalizado não for especificado."
          }
        ]
      },
      {
        "name": "MainAppBar (appBar)",
        "attributes": [
          {
            "label": "Cor de fundo da AppBar",
            "field": "darkBackground",
            "description": "Usada para definir a cor de fundo da AppBar, aplicada ao container principal."
          },
          {
            "label": "Cor do ícone na AppBar",
            "field": "iconInputForm",
            "description": "Usada para definir a cor do ícone de busca dentro do campo de formulário na AppBar."
          },
          {
            "label": "Cor do texto no campo de busca",
            "field": "textInputForm",
            "description": "Usada para definir a cor do texto dentro do campo de busca na AppBar."
          },
          {
            "label": "Cor do fundo do campo de busca",
            "field": "bgInputForm",
            "description": "Usada para definir a cor de fundo do campo de busca na AppBar."
          },
          {
            "label": "Cor do ícone de filtro",
            "field": "iconDefault",
            "description": "Usada para definir a cor do ícone de filtro na AppBar, dentro do botão de filtro."
          }
        ]
      },
      {
        "name": "PubliqueMolduraPage (publication)",
        "attributes": [
          {
            "label": "Cor de fundo da página",
            "field": "darkBackground",
            "description": "Define a cor de fundo principal da página."
          },
          {
            "label": "Cor de texto padrão",
            "field": "textDefault",
            "description": "Usada para o texto principal na página, como títulos e descrições."
          },
          {
            "label": "Cor do botão ativo",
            "field": "activeButton",
            "description": "Define a cor de fundo dos botões ativos, como o botão 'Publicar'."
          },
          {
            "label": "Cor do texto do botão ativo",
            "field": "activeButtonText",
            "description": "Define a cor do texto nos botões ativos."
          },
          {
            "label": "Cor alternativa do botão",
            "field": "alternativeButton",
            "description": "Define a cor de fundo dos botões alternativos, como o botão 'Aplicar'."
          },
          {
            "label": "Cor do texto do botão alternativo",
            "field": "alternativeButtonText",
            "description": "Define a cor do texto nos botões alternativos."
          },
          {
            "label": "Cor do ícone de favoritos",
            "field": "iconFav",
            "description": "Usada para o ícone de favoritos quando o conteúdo é marcado como favorito."
          },
          {
            "label": "Cor do ícone padrão",
            "field": "iconDefault",
            "description": "Usada para os ícones padrão, como o ícone de favoritos quando o conteúdo não é favorito."
          },
          {
            "label": "Cor de destaque do ícone",
            "field": "iconAccent",
            "description": "Usada para ícones destacados, como os ícones de compartilhamento."
          },
          {
            "label": "Cor de fundo do campo de texto longo",
            "field": "inputFormLongText",
            "description": "Define a cor de fundo do campo de texto onde o usuário pode editar o título e a descrição."
          },
          {
            "label": "Cor do texto no campo de texto longo",
            "field": "textInputFormLongText",
            "description": "Define a cor do texto dentro do campo de texto longo."
          },
          {
            "label": "Cor de fundo do indicador de progresso",
            "field": "secondaryColor",
            "description": "Usada para a cor do `CircularProgressIndicator` durante o carregamento ou download de imagens."
          },
          {
            "label": "Cor do botão de navegação",
            "field": "danger",
            "description": "Usada para o botão de navegação para marcar/desmarcar favoritos."
          },
          {
            "label": "Cor do fundo escuro",
            "field": "darkBackgroundColors",
            "description": "Usada para o fundo de modais e pop-ups."
          },
          {
            "label": "Estilo do título",
            "field": "titleStyle",
            "description": "Define o estilo do texto para o título, incluindo fonte, tamanho e cor."
          },
          {
            "label": "Estilo da legenda",
            "field": "legendStyle",
            "description": "Define o estilo do texto para a legenda, incluindo fonte, tamanho e cor."
          }
        ]
      }
    ];