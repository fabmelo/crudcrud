export const globalizationI18n: any = {
  'pt': {
    'name': "pt",
    'englishName': "Portuguese (Brazil)",
    'nativeName': "Português (Brasil)",
    'language': "pt",
    'numberFormat': {
      ",": ".",
      ".": ",",
      "NaN": "NaN (Não é um número)",
      'negativeInfinity': "-Infinito",
      'positiveInfinity': "+Infinito",
      'percent': {
        'pattern': ["-n%","n%"],
        ",": ".",
        ".": ","
      },
      'currency': {
        'pattern': ["-$ n","$ n"],
        ",": ".",
        ".": ",",
        'symbol': "R$"
      }
    },
    'calendars': {
      'standard': {
        'days': {
          'names': ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],
          'namesAbbr': ["dom","seg","ter","qua","qui","sex","sáb"],
          'namesShort': ["D","S","T","Q","Q","S","S"]
        },
        'months': {
          'names': ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro",""],
          'namesAbbr': ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez",""]
        },
        'AM': null,
        'PM': null,
        'patterns': {
          'd': "dd/MM/yyyy",
          'D': "dddd, d' de 'MMMM' de 'yyyy",
          't': "HH:mm",
          'T': "HH:mm:ss",
          'f': "dddd, d' de 'MMMM' de 'yyyy HH:mm",
          'F': "dddd, d' de 'MMMM' de 'yyyy HH:mm:ss",
          'M': "d' de 'MMMM",
          'Y': "MMMM' de 'yyyy"
        }
      }
    },
    'grid': {
      'EmptyRecord': 'Não há registros a serem exibidos',
      'GroupDropArea': 'Arraste um cabeçalho de coluna aqui para agrupar sua coluna',
      'UnGroup': 'Clique para desagrupar',
      'EmptyDataSourceError': 'DataSource não deve estar vazio no primeiro carregamento, como colunas da dataSource na grade de colunas AutoGenerate',
      'Item': 'Item',
      'Items': 'Itens'
    },
    'pager': {
      'currentPageInfo': '{0} de {1} páginas',
      'totalItemsInfo': '({0} registros)',
      'firstPageTooltip': 'Para a primeira página',
      'lastPageTooltip': 'Para a última página',
      'nextPageTooltip': 'Para a próxima página',
      'previousPageTooltip': 'Voltar para a última página',
      'nextPagerTooltip': 'Para o próximo pager',
      'previousPagerTooltip': 'Para o pager anterior'
    }
  
  }
};
