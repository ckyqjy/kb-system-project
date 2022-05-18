from typing import Union
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import spur

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/dnsreg/{string}")
def read_item(string: str):
    shell = spur.SshShell(hostname="",
                          username="", password="")
    script = "sed -i -e '$azone \"%s.com\" IN {\
        type master;\
        file \"%s.com.zone\";\
        allow-update { none; };\
        };' /etc/named.rfc1912.zones" % (string, string)

    with shell:
        result = shell.run(["sh", "-c", script])

    print(result.output)
    return {"result": result.output}
