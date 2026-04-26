import json

with open('/Users/chenghaoxiang/.openclaw/config.json', 'r') as f:
    config = json.load(f)

# Delete the 3 models previously added
config['models']['providers']['openrouter']['models'] = [
    model for model in config['models']['providers']['openrouter']['models'] 
    if model['id'] not in ['google/gemini-2.5-pro', 'google/gemini-2.0-flash-001', 'google/gemini-2.5-flash-lite']
]

# Delete aliases for those 3 models
aliases_to_delete = [
    'openrouter/google/gemini-2.5-pro', 
    'openrouter/google/gemini-2.0-flash-001', 
    'openrouter/google/gemini-2.5-flash-lite'
]
for k in aliases_to_delete:
    config['agents']['defaults']['models'].pop(k, None)

# Add the 2 new ones requested
new_models = [
    {
        "id": "google/gemini-3.1-flash-lite-preview",
        "name": "Gemini 3.1 Flash Lite Preview",
        "reasoning": False,
        "input": ["text", "image"],
        "cost": {"input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0},
        "contextWindow": 1000000,
        "maxTokens": 8192
    },
    {
        "id": "google/gemini-3.1-flash-image-preview",
        "name": "Gemini 3.1 Flash Image Preview",
        "reasoning": False,
        "input": ["text", "image"],
        "cost": {"input": 0, "output": 0, "cacheRead": 0, "cacheWrite": 0},
        "contextWindow": 1000000,
        "maxTokens": 8192
    }
]

config['models']['providers']['openrouter']['models'].extend(new_models)

aliases = {
    "openrouter/google/gemini-3.1-flash-lite-preview": {"alias": "Gemini 3.1 Flash Lite"},
    "openrouter/google/gemini-3.1-flash-image-preview": {"alias": "Gemini 3.1 Flash Image"}
}

config['agents']['defaults']['models'].update(aliases)

with open('/Users/chenghaoxiang/.openclaw/config.json', 'w') as f:
    json.dump(config, f, indent=2)

print("Updated config successfully.")
