import json

with open('/Users/chenghaoxiang/.openclaw/config.json', 'r') as f:
    config = json.load(f)

new_models = [
    {
        "id": "google/gemini-2.5-pro",
        "name": "Gemini 2.5 Pro",
        "reasoning": True,
        "input": ["text", "image"],
        "cost": {"input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0},
        "contextWindow": 1000000,
        "maxTokens": 8192
    },
    {
        "id": "google/gemini-2.0-flash-001",
        "name": "Gemini 2.0 Flash",
        "reasoning": False,
        "input": ["text", "image"],
        "cost": {"input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0},
        "contextWindow": 1000000,
        "maxTokens": 8192
    },
    {
        "id": "google/gemini-2.5-flash-lite",
        "name": "Gemini 2.5 Flash Lite",
        "reasoning": False,
        "input": ["text", "image"],
        "cost": {"input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0},
        "contextWindow": 1000000,
        "maxTokens": 8192
    }
]

config['models']['providers']['openrouter']['models'].extend(new_models)

aliases = {
    "openrouter/google/gemini-2.5-pro": {"alias": "Gemini 2.5 Pro"},
    "openrouter/google/gemini-2.0-flash-001": {"alias": "Gemini 2.0 Flash"},
    "openrouter/google/gemini-2.5-flash-lite": {"alias": "Gemini 2.5 Flash Lite"}
}

config['agents']['defaults']['models'].update(aliases)

with open('/Users/chenghaoxiang/.openclaw/config.json', 'w') as f:
    json.dump(config, f, indent=2)

print("Updated config successfully.")
