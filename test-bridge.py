import sys
import os
import requests

def test():
    print(f"Executing with Python: {sys.executable}")
    print(f"Requests module path: {requests.__file__}")

if __name__ == "__main__":
    test()
