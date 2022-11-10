# Battle challenger

## Requirements

```
npm >= "8.19.2",
node >= "v19.0.0"
```

## How to install

```bash
npm install
```

## How run localy

```bash
npm run dev
```

## Endpoints 

To create a new character you send a json with required params: name and occupation. The occupation field must be: Warrior, Thief or Mage. 

> POST localhost:3000/characters

Input example
```json
{
	"name": "Gandalfo",
	"occupation": "Mage"
}
```
Output example
```json
{
	"id": "2e589159-e327-49e5-b75e-78e9ca61c712",
	"name": "Gandalfo",
	"occupation": "mage",
	"status": "alive",
	"attributes": {
		"life": 12,
		"strength": 5,
		"skill": 6,
		"intelligence": 10
	},
	"battleModifiers": {
		"attack": {
			"strength": 0.2,
			"skill": 0.5,
			"intelligence": 1.5
		},
		"speed": {
			"strength": 0.2,
			"skill": 0.5
		}
	}
}
```

---
To list all characters

> GET localhost:3000/characters

Output example
```json
[
	{
		"id": "2e589159-e327-49e5-b75e-78e9ca61c712",
		"name": "Gandalfo",
		"occupation": "mage",
		"status": "alive"
	},
	{
		"id": "5e40b97e-2d1a-4756-93ca-f4188104fe82",
		"name": "Aratorne",
		"occupation": "warrior",
		"status": "alive"
	}
]
```

---
To execute the battle

> POST localhost:3000/battle

Input example
```json
{
	"player1": {
		"id": "2e589159-e327-49e5-b75e-78e9ca61c712"
	},
	"player2": {
		"id": "5e40b97e-2d1a-4756-93ca-f4188104fe82"
	}
}
```
Output example 
```json
[
	"Gandalfo (4) foi mais rapido que Aratorne (3) e irá começar!",
	"Gandalfo atacou Aratorne com 18 de dano, Aratorne com 2 pontos de vida restantes;",
	"Aratorne atacou Gandalfo com 4 de dano, Gandalfo com 8 pontos de vida restantes;",
	"Gandalfo atacou Aratorne com 12 de dano, Aratorne com -10 pontos de vida restantes;",
	"Gandalfo venceu a batalha! Gandalfo ainda tem 8 pontos de vida restantes!"
]
```



## Automated Tests

```bash
npm run test
```