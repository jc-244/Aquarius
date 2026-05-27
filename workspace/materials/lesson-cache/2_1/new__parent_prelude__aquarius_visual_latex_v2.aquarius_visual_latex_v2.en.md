%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgaW50cm9kdWN0aW9uIGhhcyBubyB0ZXh0Ym9vayBmaWd1cmUgYW5kIG5vIGF2YWlsYWJsZSB3ZWIgcmVmZXJlbmNlIHNvdXJjZS4gVGhlIG1haW4gY2hhbGxlbmdlIGlzIG1hcHBpbmcgYSBsb25nIHN5bWJvbGljIGRpZmZlcmVudGlhbCBlcXVhdGlvbiB0byB0aGUgc2ltcGxlIGlucHV0LW91dHB1dCBpZGVhIG9mIGFuIExUSUMgc3lzdGVtLiBBIHNpbmdsZSBjbGVhbiBnZW5lcmF0ZWQgdGVhY2hpbmcgZGlhZ3JhbSBpcyBqdXN0aWZpZWQgYmVjYXVzZSBpdCBnaXZlcyBzdHVkZW50cyBhIHZpc3VhbCBhbmNob3IgZm9yIHgodCksIHkodCksIFAoRCksIGFuZCBRKEQpIHdpdGhvdXQgcmVwbGFjaW5nIHRoZSBleGFjdCBmb3JtdWxhcy4iLCJjcmFtIjoiVXNlIHRoZSB2aXN1YWwgdG8gcmVjb2duaXplIHRoZSBleGFtIHBhdHRlcm46IGlucHV0IGRlcml2YXRpdmVzIG9uIG9uZSBzaWRlLCBvdXRwdXQgZGVyaXZhdGl2ZXMgb24gdGhlIG90aGVyLCB0aGVuIGNvbXByZXNzIHRvIFEoRCl5ID0gUChEKXguIiwic3RhbmRhcmQiOiJVc2UgdGhlIHZpc3VhbCBhcyB0aGUgYnJpZGdlIGZyb20gdGhlIGxvbmcgZXF1YXRpb24gdG8gdGhlIG9wZXJhdG9yIHNob3J0aGFuZCwgdGhlbiB3b3JrIG9uZSByZXByZXNlbnRhdGl2ZSBpZGVudGlmaWNhdGlvbiBleGFtcGxlLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgdmlzdWFsIHRvIHNlcGFyYXRlIHRoZSBzeXN0ZW0gbW9kZWwgZnJvbSBjb21tb24gdHJhcHM6IG5vbmxpbmVhciB0ZXJtcywgdGltZS12YXJ5aW5nIGNvZWZmaWNpZW50cywgYW5kIGNvbmZ1c2luZyBQKEQpIHdpdGggUShEKS4ifQ==" style="display:none;"></div>%%KC_END%%
# 2.1 Introduction — LTIC Continuous-Time Systems

> **Section Objective:** Learn how LTIC continuous-time systems are represented by constant-coefficient linear differential equations and by the compact operator form \(Q(D)y(t) = P(D)x(t)\).

---

**Concepts In This Section**

- LTIC differential-equation model
- Constant coefficients
- Operator notation \(D\)
- System polynomials \(Q(D)\) and \(P(D)\)
- Orders \(N\) and \(M\)

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiTWFrZSBzdHVkZW50cyBpbnN0YW50bHkgc2VlIHRoZSBleGFtIHN0cnVjdHVyZTogeCh0KSBlbnRlcnMsIGRlcml2YXRpdmUgb3BlcmF0b3JzIGFjdCwgeSh0KSBleGl0cy4iLCJzdGFuZGFyZCI6IlVzZSBpdCBhcyB0aGUgdmlzdWFsIGJyaWRnZSBiZWZvcmUgcmVhZGluZyB0aGUgZm9ybXVsYXMuIiwidG9wX3Njb3JlIjoiVXNlIGl0IHRvIHByZXZlbnQgc3dhcHBpbmcgUChEKSBhbmQgUShEKSBvciB0cmVhdGluZyB0aGUgbW9kZWwgYXMgYSBibG9jayB3aXRoIGFyYml0cmFyeSBub25saW5lYXIgYmVoYXZpb3IuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 An LTIC system takes input \(x(t)\), applies a constant-coefficient differential equation, and produces output \(y(t)\). The compact form \(Q(D)y(t) = P(D)x(t)\) names the two sides.*
![Illustration](/generated/gptimage2-1779441521834-3628.png)

## 1. LTIC Systems as Differential Equations

Equation (2.1) says the output \(y(t)\) and input \(x(t)\) are connected through a linear combination of their derivatives. Here \(x(t)\) is the system input, \(y(t)\) is the system output, \(N\) is the highest derivative order on the output side, and \(M\) is the highest derivative order on the input side. The coefficients \(a_i\) multiply output derivatives, and \(b_i\) multiply input derivatives. Crucially, all \(a_i\) and \(b_i\) are **constants** — this is what places the system in the LTIC class.

**Minimal example:** For \(y''(t)+3y'(t)+2y(t)=4x'(t)+5x(t)\):
- \(N=2\), \(M=1\)
- \(a_1=3\), \(a_2=2\)
- \(b_{N-M}=b_1=4\), \(b_N=b_2=5\)

#### Exam Trigger
A problem asks you to model or recognize an LTIC continuous-time system from a differential equation.

#### Common Misuse
Calling an equation LTIC when coefficients depend on time (e.g., \(t \cdot y'(t)\)) or when nonlinear terms like \(y^2(t)\) appear — both break the LTIC model.

$$\frac{d^N y(t)}{dt^N}+a_1\frac{d^{N-1}y(t)}{dt^{N-1}}+\cdots+a_{N-1}\frac{dy(t)}{dt}+a_Ny(t)=b_{N-M}\frac{d^M x(t)}{dt^M}+\cdots+b_{N-1}\frac{dx(t)}{dt}+b_Nx(t)$$

## 2. Operator Notation D

The symbol \(D\) is shorthand for the operation "differentiate with respect to time." It is **not** a new signal and **not** an ordinary constant — it is an operator that acts on whatever signal follows it.

- \(D\,y(t) = \dfrac{dy(t)}{dt}\)
- \(D^2 y(t) = \dfrac{d^2 y(t)}{dt^2}\)

Using the earlier example: \(D\,y(t)\) is the first derivative of \(y(t)\), and \(D^2 y(t)\) is the second derivative.

#### Exam Trigger
A long differential equation is rewritten compactly using powers of \(D\).

#### Common Misuse
Treating \(D\) like a number that can be freely moved or cancelled — remember it means differentiation, so its position relative to the signal matters.

$$D = \frac{d}{dt}$$

## 3. The output-side polynomial Q(D)

Equation (2.2) is the **compact operator form** of the long differential equation (2.1). \(Q(D)\) collects all the output-side derivative terms (the left-hand side), and \(P(D)\) collects all the input-side derivative terms (the right-hand side). Here \(y(t)\) is the output and \(x(t)\) is the input.

**When to use it:** Whenever the full derivative equation is too long and the problem calls for system-level algebra or identification.

#### Exam Trigger
Phrases such as "write the system in operator form" or "identify \(P(D)\) and \(Q(D)\)."

#### Common Misuse
Reversing the two polynomials. Remember: \(Q(D)\) multiplies \(y(t)\) (output side), while \(P(D)\) multiplies \(x(t)\) (input side).

$$Q(D)\,y(t) = P(D)\,x(t) \quad (2.2)$$

## 4. Orders M and N: the warning sign

\(Q(D)\) is built from the \(y(t)\) side of the differential equation. \(N\) is the highest output derivative order, and \(a_i\) are the constant output-side coefficients.

**Concrete example:** If the output side is \(y''(t)+3y'(t)+2y(t)\), then:

$$Q(D) = D^2 + 3D + 2$$

#### Exam Trigger
A problem asks for the characteristic or operator polynomial associated with the output side.

#### Common Misuse
Putting input-side coefficients (the \(b_i\)) into \(Q(D)\). Only the \(a_i\) from the \(y(t)\) side belong here.

$$Q(D) = D^N + a_1 D^{N-1} + \cdots + a_{N-1}D + a_N$$

$$P(D) = b_{N-M}D^M + b_{N-M+1}D^{M-1} + \cdots + b_{N-1}D + b_N$$
*\(P(D)\) is built from the \(x(t)\) side of the differential equation. \(M\) is the highest input derivative order, and \(b_i\) are the constant input-side coefficients.

**Continuing the same example:** If the input side is \(4x'(t)+5x(t)\), then:

$$P(D) = 4D + 5$$

So the full operator form is \((D^2+3D+2)\,y(t) = (4D+5)\,x(t)\).

#### Exam Trigger
A problem asks for the numerator or input polynomial in operator notation.

#### Common Misuse
Assuming \(P(D)\) and \(Q(D)\) must have the same order. The model allows general \(M\) and \(N\), though \(M > N\) is flagged as practically undesirable.*

## 4. Orders M and N: The Warning Sign

\(N\) is the highest output derivative order and \(M\) is the highest input derivative order. The textbook states that \(M\) and \(N\) can theoretically take any values, but **practical considerations make \(M > N\) undesirable**. The detailed reasons are postponed to Section 4.3-3 and should not be invented here.

**Safe takeaway for this section:** When you see \(M > N\) in a system, flag it as a warning sign — do not dismiss it as impossible.

#### Exam Note
For this introduction, recognizing and flagging \(M > N\) is sufficient. Do not derive consequences yet.

#### Common Misuse
Treating \(M > N\) as mathematically impossible. The text says *undesirable*, not *impossible*.

$$M > N \quad \text{is practically undesirable}$$

---
**📌 Key Takeaways**
- Equation (2.1): output derivatives equal input derivatives with **constant** coefficients — this defines the LTIC differential-equation model.
- Operator shorthand: \(D = \dfrac{d}{dt}\), so \(D^k\) applied to a signal means the \(k\)-th derivative with respect to time.
- Compact form \(Q(D)\,y(t) = P(D)\,x(t)\): \(Q(D)\) acts on the output \(y(t)\); \(P(D)\) acts on the input \(x(t)\) — never swap them.
- Polynomials: \(Q(D)=D^N+a_1D^{N-1}+\cdots+a_N\) and \(P(D)=b_{N-M}D^M+\cdots+b_N\); flag \(M>N\) as practically undesirable.

*Next, we will use this model to analyze continuous-time system behavior more systematically.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6Imx0aWNfZGlmZmVyZW50aWFsX2VxdWF0aW9uX21vZGVsIiwibGFiZWwiOiJSZWNvZ25pemluZyB0aGUgTFRJQyBkaWZmZXJlbnRpYWwtZXF1YXRpb24gbW9kZWwiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIGVxdWF0aW9uIGJlc3QgbWF0Y2hlcyB0aGUga2luZCBvZiBMVElDIGNvbnRpbnVvdXMtdGltZSBzeXN0ZW0gbW9kZWwgaW50cm9kdWNlZCBpbiB0aGlzIHNlY3Rpb24/Iiwib3B0aW9ucyI6WyJBLiBcXCh5Jyh0KSs0eSh0KT0yeCh0KVxcKSIsIkIuIFxcKHleMih0KSs0eSh0KT0yeCh0KVxcKSIsIkMuIFxcKHRcXCx5Jyh0KSs0eSh0KT0yeCh0KVxcKSIsIkQuIFxcKHkodCk9XFxzaW4oeCh0KSlcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgc2VjdGlvbiB1c2VzIGxpbmVhciBkaWZmZXJlbnRpYWwgZXF1YXRpb25zIHdpdGggY29uc3RhbnQgY29lZmZpY2llbnRzLiBPcHRpb24gQSBoYXMgZGVyaXZhdGl2ZXMgYW5kIGNvbnN0YW50IGNvZWZmaWNpZW50cyB3aXRob3V0IG5vbmxpbmVhciBzaWduYWwgdGVybXMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhlIHRlcm0gXFwoeV4yKHQpXFwpIGlzIG5vbmxpbmVhci4iLCJDIjoiVGhlIGNvZWZmaWNpZW50IFxcKHRcXCkgaXMgdGltZS12YXJ5aW5nLCBub3QgY29uc3RhbnQuIiwiRCI6IlRoZSBzaW5lIG9mIHRoZSBpbnB1dCBpcyBub25saW5lYXIgYW5kIGlzIG5vdCB0aGUgZGlmZmVyZW50aWFsLWVxdWF0aW9uIGZvcm0gc2hvd24gaGVyZS4ifSwiaGludCI6IkNoZWNrIHR3byB0aGluZ3M6IGxpbmVhciBzaWduYWwgdGVybXMgYW5kIGNvbnN0YW50IGNvZWZmaWNpZW50cy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkEgY2xhc3NtYXRlIHNheXMgYW55IGVxdWF0aW9uIGludm9sdmluZyBcXCh4KHQpXFwpIGFuZCBcXCh5KHQpXFwpIGlzIGFuIExUSUMgZGlmZmVyZW50aWFsIHN5c3RlbS4gV2h5IGlzIHRoYXQgd3Jvbmc/Iiwib3B0aW9ucyI6WyJBLiBMVElDIHN5c3RlbXMgY2Fubm90IGluY2x1ZGUgZGVyaXZhdGl2ZXMuIiwiQi4gVGhlIGNvZWZmaWNpZW50cyBtdXN0IGJlIGNvbnN0YW50cyBhbmQgdGhlIHRlcm1zIG11c3QgcmVtYWluIGxpbmVhci4iLCJDLiBMVElDIHN5c3RlbXMgbXVzdCBhbHdheXMgaGF2ZSBcXChNPU5cXCkuIiwiRC4gTFRJQyBzeXN0ZW1zIGNhbm5vdCBoYXZlIGFuIGlucHV0IFxcKHgodClcXCkuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhpcyBzZWN0aW9uIGZvY3VzZXMgb24gbGluZWFyIGRpZmZlcmVudGlhbCBzeXN0ZW1zIHdpdGggY29uc3RhbnQgY29lZmZpY2llbnRzLiBEZXJpdmF0aXZlcyBhcmUgYWxsb3dlZCwgYnV0IG5vbmxpbmVhciB0ZXJtcyBhbmQgdGltZS12YXJ5aW5nIGNvZWZmaWNpZW50cyBicmVhayB0aGUgc3RhdGVkIG1vZGVsLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkRlcml2YXRpdmVzIGFyZSBjZW50cmFsIHRvIHRoZSBtb2RlbC4iLCJDIjoiVGhlIHRleHQgYWxsb3dzIGdlbmVyYWwgXFwoTVxcKSBhbmQgXFwoTlxcKSwgYWx0aG91Z2ggXFwoTT5OXFwpIGlzIGZsYWdnZWQgYXMgdW5kZXNpcmFibGUuIiwiRCI6IlRoZSBtb2RlbCBleHBsaWNpdGx5IHJlbGF0ZXMgaW5wdXQgXFwoeCh0KVxcKSB0byBvdXRwdXQgXFwoeSh0KVxcKS4ifSwiaGludCI6IlRoZSBsZXR0ZXJzIExUSUMgcG9pbnQgdG8gbGluZWFyIGFuZCB0aW1lLWludmFyaWFudC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6Im9wZXJhdG9yX25vdGF0aW9uX2QiLCJsYWJlbCI6Ik1lYW5pbmcgb2YgRCBub3RhdGlvbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJtZWRpdW0iLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjF9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AyX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiB0aGlzIHNlY3Rpb24sIHdoYXQgZG9lcyBcXChEXFwpIHJlcHJlc2VudD8iLCJvcHRpb25zIjpbIkEuIE11bHRpcGxpY2F0aW9uIGJ5IHRpbWUgXFwodFxcKSIsIkIuIERpZmZlcmVudGlhdGlvbiB3aXRoIHJlc3BlY3QgdG8gdGltZSIsIkMuIFRoZSBvdXRwdXQgc2lnbmFsIiwiRC4gQSBjb25zdGFudCBjb2VmZmljaWVudCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBvcGVyYXRvciBcXChEXFwpIHJlcHJlc2VudHMgXFwoZC9kdFxcKSwgc28gXFwoRFxcKSBhY3Rpbmcgb24gYSBzaWduYWwgbWVhbnMgZGlmZmVyZW50aWF0aW5nIHRoYXQgc2lnbmFsIHdpdGggcmVzcGVjdCB0byB0aW1lLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6Ik11bHRpcGxpY2F0aW9uIGJ5IHRpbWUgd291bGQgYmUgXFwodFxcKSB0aW1lcyB0aGUgc2lnbmFsLCBub3QgXFwoRFxcKS4iLCJDIjoiVGhlIG91dHB1dCBzaWduYWwgaXMgXFwoeSh0KVxcKSwgbm90IFxcKERcXCkuIiwiRCI6IkNvZWZmaWNpZW50cyBhcmUgXFwoYV9pXFwpIGFuZCBcXChiX2lcXCk7IFxcKERcXCkgaXMgYW4gb3BlcmF0aW9uLiJ9LCJoaW50IjoiUmVhZCBcXChEXFwpIGFzIGFuIGFjdGlvbiwgbm90IGFzIGEgc2lnbmFsLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6Im9wZXJhdG9yX2Zvcm1fcXAiLCJsYWJlbCI6IlJlYWRpbmcgUShEKXkodCk9UChEKXgodCkiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBcXCh5JycodCkrM3knKHQpKzJ5KHQpPTR4Jyh0KSs1eCh0KVxcKSwgd2hhdCBhcmUgXFwoUShEKVxcKSBhbmQgXFwoUChEKVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKFEoRCk9RF4yKzNEKzIsXFxxdWFkIFAoRCk9NEQrNVxcKSIsIkIuIFxcKFEoRCk9NEQrNSxcXHF1YWQgUChEKT1EXjIrM0QrMlxcKSIsIkMuIFxcKFEoRCk9RCs1LFxccXVhZCBQKEQpPUReMiszRCsyXFwpIiwiRC4gXFwoUShEKT1EXjIrNEQrNSxcXHF1YWQgUChEKT0zRCsyXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiXFwoUShEKVxcKSBjb21lcyBmcm9tIHRoZSBvdXRwdXQgXFwoeSh0KVxcKSBzaWRlLCBhbmQgXFwoUChEKVxcKSBjb21lcyBmcm9tIHRoZSBpbnB1dCBcXCh4KHQpXFwpIHNpZGUuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyByZXZlcnNlcyB0aGUgb3V0cHV0LXNpZGUgYW5kIGlucHV0LXNpZGUgcG9seW5vbWlhbHMuIiwiQyI6IlRoaXMgbWl4ZXMgdGVybXMgZnJvbSB0aGUgaW5wdXQgc2lkZSBpbmNvcnJlY3RseS4iLCJEIjoiVGhpcyBjb21iaW5lcyBjb2VmZmljaWVudHMgZnJvbSBib3RoIHNpZGVzIGluc3RlYWQgb2YgcHJlc2VydmluZyB0aGUgdHdvIHNpZGVzLiJ9LCJoaW50IjoiXFwoUShEKVxcKSBtdWx0aXBsaWVzIFxcKHkodClcXCk7IFxcKFAoRClcXCkgbXVsdGlwbGllcyBcXCh4KHQpXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiT2JzZXJ2ZSBhIHN5c3RlbSBkaWFncmFtIHdpdGggXFwoeCh0KVxcKSBlbnRlcmluZyBhIGRpZmZlcmVudGlhbC1lcXVhdGlvbiBibG9jayBhbmQgXFwoeSh0KVxcKSBsZWF2aW5nLiBUaGUgYmxvY2sgaXMgbGFiZWxlZCBcXChRKEQpeSh0KT1QKEQpeCh0KVxcKS4gV2hpY2ggaW50ZXJwcmV0YXRpb24gaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIFxcKFAoRClcXCkgY29sbGVjdHMgb3V0cHV0LXNpZGUgZGVyaXZhdGl2ZSB0ZXJtcy4iLCJCLiBcXChRKEQpXFwpIGNvbGxlY3RzIGlucHV0LXNpZGUgZGVyaXZhdGl2ZSB0ZXJtcy4iLCJDLiBcXChRKEQpXFwpIGFjdHMgb24gXFwoeSh0KVxcKSwgYW5kIFxcKFAoRClcXCkgYWN0cyBvbiBcXCh4KHQpXFwpLiIsIkQuIFxcKERcXCkgbWVhbnMgZGVsYXkgYnkgb25lIHNlY29uZC4iXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJUaGUgY29tcGFjdCBlcXVhdGlvbiBpcyByZWFkIGRpcmVjdGx5OiBcXChRKEQpXFwpIGlzIGF0dGFjaGVkIHRvIFxcKHkodClcXCksIGFuZCBcXChQKEQpXFwpIGlzIGF0dGFjaGVkIHRvIFxcKHgodClcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiXFwoUChEKVxcKSBpcyB0aGUgaW5wdXQtc2lkZSBwb2x5bm9taWFsLiIsIkIiOiJcXChRKEQpXFwpIGlzIHRoZSBvdXRwdXQtc2lkZSBwb2x5bm9taWFsLiIsIkQiOiJJbiB0aGlzIHNlY3Rpb24gXFwoRFxcKSBtZWFucyBkaWZmZXJlbnRpYXRpb24sIG5vdCBkZWxheS4ifSwiaGludCI6Ikxvb2sgYXQgd2hpY2ggcG9seW5vbWlhbCBpcyB3cml0dGVuIG5leHQgdG8gZWFjaCBzaWduYWwuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImdlbmVyYXRlZF9zdGF0aWNfc3lzdGVtX21hcCIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoib3JkZXJzX21fbl93YXJuaW5nIiwibGFiZWwiOiJJbnRlcnByZXRpbmcgTSBhbmQgTiIsImltcG9ydGFuY2UiOiJtZWRpdW0iLCJleGFtX3dlaWdodCI6Im1lZGl1bSIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6MX0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDRfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIHRoZSBzZWN0aW9uJ3Mgbm90YXRpb24sIHdoYXQgZG8gXFwoTlxcKSBhbmQgXFwoTVxcKSBkZXNjcmliZT8iLCJvcHRpb25zIjpbIkEuIFxcKE5cXCkgaXMgdGhlIGhpZ2hlc3Qgb3V0cHV0IGRlcml2YXRpdmUgb3JkZXI7IFxcKE1cXCkgaXMgdGhlIGhpZ2hlc3QgaW5wdXQgZGVyaXZhdGl2ZSBvcmRlci4iLCJCLiBcXChOXFwpIGlzIHRoZSBudW1iZXIgb2YgaW5wdXRzOyBcXChNXFwpIGlzIHRoZSBudW1iZXIgb2Ygb3V0cHV0cy4iLCJDLiBcXChOXFwpIGlzIHRoZSBpbnB1dCBhbXBsaXR1ZGU7IFxcKE1cXCkgaXMgdGhlIG91dHB1dCBhbXBsaXR1ZGUuIiwiRC4gXFwoTlxcKSBhbmQgXFwoTVxcKSBhcmUgYWx3YXlzIGVxdWFsIGJ5IGRlZmluaXRpb24uIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiXFwoTlxcKSBpcyB0aWVkIHRvIHRoZSBoaWdoZXN0IGRlcml2YXRpdmUgb2YgXFwoeSh0KVxcKSwgd2hpbGUgXFwoTVxcKSBpcyB0aWVkIHRvIHRoZSBoaWdoZXN0IGRlcml2YXRpdmUgb2YgXFwoeCh0KVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgc2VjdGlvbiBpcyBhYm91dCBkZXJpdmF0aXZlIG9yZGVycywgbm90IGNvdW50cyBvZiBpbnB1dHMgYW5kIG91dHB1dHMuIiwiQyI6IlxcKE5cXCkgYW5kIFxcKE1cXCkgYXJlIG9yZGVycywgbm90IGFtcGxpdHVkZXMuIiwiRCI6IlRoZSB0ZXh0IGFsbG93cyBnZW5lcmFsIFxcKE1cXCkgYW5kIFxcKE5cXCksIHRob3VnaCBpdCB3YXJucyB0aGF0IFxcKE0+TlxcKSBpcyBwcmFjdGljYWxseSB1bmRlc2lyYWJsZS4ifSwiaGludCI6Ik1hdGNoIFxcKE5cXCkgd2l0aCBcXCh5KHQpXFwpIGFuZCBcXChNXFwpIHdpdGggXFwoeCh0KVxcKS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3A0X3EyIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJUaGUgdGV4dCBzYXlzIFxcKE0+TlxcKSBpcyBwcmFjdGljYWxseSB1bmRlc2lyYWJsZS4gSW4gdGhpcyBpbnRyb2R1Y3Rpb24sIHdoYXQgc2hvdWxkIHlvdSBjb25jbHVkZSBmcm9tIHRoYXQgc3RhdGVtZW50LCBhbmQgd2hhdCBzaG91bGQgeW91IG5vdCBjbGFpbSB5ZXQ/IiwiaWRlYWxfYW5zd2VyIjoiSSBzaG91bGQgY29uY2x1ZGUgdGhhdCBcXChNPk5cXCkgaXMgYSB3YXJuaW5nIHNpZ24gZm9yIHByYWN0aWNhbCBzeXN0ZW1zLiBJIHNob3VsZCBub3QgY2xhaW0gaXQgaXMgbWF0aGVtYXRpY2FsbHkgaW1wb3NzaWJsZSBvciBnaXZlIGRldGFpbGVkIHJlYXNvbnMgeWV0LCBiZWNhdXNlIHRoZSB0ZXh0IHNheXMgdGhvc2UgcmVhc29ucyBhcmUgc2hvd24gbGF0ZXIgaW4gU2VjdGlvbiA0LjMtMy4iLCJncmFkaW5nX3J1YnJpYyI6WyJNdXN0IHN0YXRlIHRoYXQgXFwoTT5OXFwpIGlzIHVuZGVzaXJhYmxlIG9yIGEgd2FybmluZyBzaWduLiIsIk11c3Qgbm90IGNhbGwgXFwoTT5OXFwpIGltcG9zc2libGUuIiwiTXVzdCBtZW50aW9uIHRoYXQgdGhlIGRldGFpbGVkIHJlYXNvbnMgYXJlIHBvc3Rwb25lZCB0byBhIGxhdGVyIHNlY3Rpb24uIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCByZWFkcyB0aGUgd29yZGluZyBwcmVjaXNlbHkgaW5zdGVhZCBvZiBvdmVyY2xhaW1pbmcgYmV5b25kIHRoZSBpbnRyb2R1Y3Rpb24uIiwiaGludCI6IkZvY3VzIG9uIHRoZSB3b3JkICd1bmRlc2lyYWJsZScsIG5vdCAnaW1wb3NzaWJsZScuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
