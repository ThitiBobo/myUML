# myUML - Réflexion

réaliser un outil pour réaliser rapidement et simplement des diagramme UML.

## UML - Diagramme de classes

chose à faire : 

- Langage simple et concis pour décrire un diagramme de classes
- Rendre l'affichage des classes automatique et "intelligent" à partir du langage.
- Rendre le diagramme exportable, grâce au langage ou un autre format d'export (ex : YAML)

### Langage 

- class
- abstract class
- interface

- héritage
- implémentation (interface)
- relations

### Normalisation du langage:

#### Classe

```yaml
<nom de la classe> : <classe mère>, <implémentation 1>, <implémentation 2>
	<visibilité> <attribut 1> : <type>
	<visibilité> <attribut 2> : <type>
	<visibilité> <method 1>(<I type 1>, <I type 2>) : <O type> 
	<visibilité> <method 2>(<I type 1>, <I type 2>) : <O type>

```

#### Abstract classe

```YAML
abstract <nom de la classe> : <classe mère>, <implémentation 1>
	<visibilité> <attribut 1> : <type>
	<visibilité> abstract <method 1>(<I type 1>, <I type 2>) : <O type> 
```

#### Interface

```YAML
interface <nom de la classe> : <interface mère>
	<visibilité> <method 2>(<I type 1>, <I type 2>) : <O type>
```



## Angular - structure du projet

