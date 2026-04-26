%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImJvdGgiLCJyYXRpb25hbGUiOiJUaGlzIHNlY3Rpb24gaXMgbW9zdGx5IGhpc3RvcmljYWwgdGV4dCwgc28gYSBnZW5lcmF0ZWQgdGltZWxpbmUtc3R5bGUgdGVhY2hpbmcgdmlzdWFsIGlzIG5lZWRlZCB0byBvcmdhbml6ZSB0aGUgc3RvcnkgY2xlYXJseS4gVGhlIHRleHRib29rJ3MgQ291bnRyeSBYL0NvdW50cnkgWSBhbmFsb2d5IGZpZ3VyZSBpcyBhbHNvIGhpZ2hseSByZWxldmFudCBiZWNhdXNlIGl0IGdpdmVzIHRoZSBwcmFjdGljYWwgcmVhc29uIGNvbXBsZXggbnVtYmVycyBtYXR0ZXI6IHRoZXkgY2FuIHNpbXBsaWZ5IGEgcmVhbC1udW1iZXIgcHJvYmxlbSBieSBwYXNzaW5nIHRocm91Z2ggYSBicm9hZGVyIHN5c3RlbS4iLCJjcmFtIjoiVXNlIHZpc3VhbHMgdG8gY29tcHJlc3MgdGhlIGhpc3RvcnkgaW50byBhIGZhc3QgcGF0dGVybjogbnVtYmVyIHN5c3RlbSBrZWVwcyBleHBhbmRpbmcgd2hlbiBvbGQgbnVtYmVycyBjYW5ub3Qgc29sdmUgbmV3IHByb2JsZW1zLiIsInN0YW5kYXJkIjoiVXNlIHRoZSBnZW5lcmF0ZWQgcHJvZ3Jlc3Npb24gdmlzdWFsIHRvIGNsYXJpZnkgdGhlIHNlcXVlbmNlIG9mIGV4dGVuc2lvbnMsIHRoZW4gdXNlIHRoZSB0ZXh0Ym9vayBhbmFsb2d5IGZpZ3VyZSBmb3IgdGhlIG1haW4gcHJhY3RpY2FsIHRha2Vhd2F5LiIsInRvcF9zY29yZSI6IlVzZSB2aXN1YWxzIHRvIGVtcGhhc2l6ZSB0aGUgZXhhbS13b3J0aHkgZGlzdGluY3Rpb24gYmV0d2VlbiAnZmluYWwgYW5zd2VyIGlzIHJlYWwnIGFuZCAnY29tcGxleCBudW1iZXJzIGFyZSBzdGlsbCB1c2VmdWwgaW4gdGhlIGRlcml2YXRpb24sJyBwbHVzIHRoZSBoaXN0b3JpY2FsIHRyaWdnZXIgY2FzZXMgeF4yICsgMSA9IDAgYW5kIENhcmRhbm8ncyBjdWJpYy4ifQ==" style="display:none;"></div>%%KC_END%%
# B.1-1 A Historical Note

> **Section Objective:** Understand why complex numbers were invented, trace the pattern of how the number system expanded, and see why complex numbers matter for signals and systems work.

---

Why invent a new kind of number just to solve an equation? That question is exactly what this section answers.

The number system did not arrive all at once. It grew in stages — from counting numbers to fractions, then to irrational numbers, then to negatives, and finally to complex numbers. Each expansion happened for the same reason: the existing numbers were not enough to solve a new class of problems.

The goal here is not to memorize names and dates. The goal is to recognize the **pattern**: new numbers were accepted because they solved real mathematical problems, not because someone decided to complicate things.

For signals and systems, this matters directly. Complex numbers may look unfamiliar at first, but they make many calculations shorter and cleaner. Understanding where they came from makes them easier to trust.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgYXMgYSBvbmUtZ2xhbmNlIG1lbW9yeSBtYXAgb2Ygd2h5IGVhY2ggbmV3IG51bWJlciB0eXBlIHdhcyBpbnRyb2R1Y2VkLiIsInN0YW5kYXJkIjoiVXNlIHRoaXMgdG8gZXhwbGFpbiB0aGUgaGlzdG9yaWNhbCBzZXF1ZW5jZSBhbmQgdGhlIHByb2JsZW0gZWFjaCBleHRlbnNpb24gc29sdmVkLiIsInRvcF9zY29yZSI6IlVzZSB0aGlzIHRvIGNvbXBhcmUgdHJpZ2dlciBwcm9ibGVtcyBhbmQgc2hvdyB0aGUgbG9naWMgb2YgbnVtYmVyLXN5c3RlbSBnZW5lcmFsaXphdGlvbiBwcmVjaXNlbHkuIn0=" style="display:none;"></div>%%KC_END%%
*🎨 The number system expanded in five stages, each time because the previous numbers could not solve a new class of problems.*
![Illustration](/generated/gptimage2-1777215229805-6785.png)

## 1. Why the Number System Kept Expanding

Every extension of the number system was driven by a concrete need, not by abstract curiosity.

- **Natural numbers** (1, 2, 3, ...) handle counting objects.
- **Fractions** handle measurement — if you cut a field into three equal parts, you need \(\frac{1}{3}\).
- **Irrational numbers** handle geometry — the diagonal of a unit square has length \(\sqrt{2}\), which cannot be written as a fraction.
- **Negative numbers** handle equations — the equation \(x + 5 = 0\) has no solution if you only allow positive numbers. Accepting \(x = -5\) required a new kind of number.

Each time, mathematicians initially resisted the new numbers. Each time, the numbers were eventually accepted because they worked.

### EXAM TIP

If a question asks why complex numbers were introduced, the best answer is: **the existing number system could not solve all equations.** That same logic applies to every earlier extension too.

$$j^2 = -1 \quad \text{and} \quad \sqrt{-1} = \pm j$$
*This is the defining property of the symbol \(j\): it is the number whose square equals \(-1\). No real number has this property, which is exactly why a new symbol was needed. Engineers use \(j\) instead of the mathematician's \(i\) to avoid confusion with \(i\), which is already used to denote electrical current in circuit analysis.*

## 2. What Made Complex Numbers Necessary

Start with the simplest case. The equation \(x^2 + 1 = 0\) asks: what number, when squared, gives \(-1\)? No real number does — squaring any real number always gives a non-negative result. So mathematicians defined a new symbol \(j\) with the property \(j^2 = -1\).

This is not mysterious. It is the same logical move as accepting \(-5\) to solve \(x + 5 = 0\): you extend the system to make the equation solvable.

### WORKED EXAMPLE

Consider \(\sqrt{-4}\). We can write:

$$\sqrt{-4} = \sqrt{4} \cdot \sqrt{-1} = \pm 2j$$

The two roots are \(+2j\) and \(-2j\).

#### Note

Notice that there are **two** roots, just as \(x^2 = 4\) has two real roots \(\pm 2\). The same symmetry holds in the complex case. Euler introduced the notation \(i\) for this symbol; engineers adopted \(j\) for the practical reason described above.

## 3. Why Complex Numbers Are Useful Even for Real Answers

Here is the most important historical insight: **complex numbers can appear in the middle of a calculation even when the final answer is a real number.**

The clearest example comes from Cardano's formula for cubic equations. Consider:

$$x^3 - 15x - 4 = 0$$

Cardano's formula, applied mechanically, produces intermediate expressions involving \(\sqrt{-121}\) — a square root of a negative number. At first glance this looks like a sign that something has gone wrong. But if you carry the complex expressions through and simplify, the imaginary parts cancel, and the final answer is the real number \(x = 4\).

The key idea in plain English: **sometimes you must pass through complex numbers to reach a real answer efficiently.** The complex numbers are not the destination — they are a shortcut on the route.

### EXAM TIP

This historical example is mainly used to justify why complex numbers are not pointless. The argument is: even if your problem starts and ends in real numbers, complex numbers can make the path shorter and more systematic.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="book_image" data-teaching-role="comparison_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgZmlndXJlIHRvIG1lbW9yaXplIHRoZSBzaG9ydGN1dCBpZGVhOiBnb2luZyB0aHJvdWdoIHRoZSBsYXJnZXIgc3lzdGVtIGNhbiBiZSBlYXNpZXIgdGhhbiBzdGF5aW5nIGluIHRoZSBzbWFsbGVyIG9uZS4iLCJzdGFuZGFyZCI6IlVzZSB0aGlzIGZpZ3VyZSB0byBleHBsYWluIHRoZSB0ZXh0Ym9vaydzIG1haW4gYW5hbG9neSBmb3Igd2h5IGNvbXBsZXggbnVtYmVycyBzaW1wbGlmeSB3b3JrLiIsInRvcF9zY29yZSI6IlVzZSB0aGlzIGZpZ3VyZSB0byBoaWdobGlnaHQgdGhlIGFic3RyYWN0IHByaW5jaXBsZSBvZiBhbmFseXRpYyBjb250aW51YXRpb24gYW5kIGludGVybWVkaWFyeS1kb21haW4gc2ltcGxpZmljYXRpb24uIn0=" style="display:none;"></div>%%KC_END%%
![unknown](/figures/page-004-unknown-1.png)
*Even when a problem begins and ends in the real-number world, the shortest mathematical route may pass through the broader complex-number domain.*

## 4. The Main Historical Takeaway

Gauss contributed two things that matter here. First, he gave complex numbers a coherent geometric interpretation — a complex number is simply a point on a two-dimensional plane, which made them far less mysterious. Second, he proved the **Fundamental Theorem of Algebra**: every polynomial equation of degree \(n\) has exactly \(n\) roots, provided you allow complex numbers. Real numbers alone are not enough to guarantee this.

This connects directly to the Country X / Country Y analogy in the textbook. Real numbers are where many engineering problems begin and end. But the complex-number domain is a larger territory, and traveling through it can make the route shorter.

### KEY TAKEAWAY

> **Complex numbers expanded the number system and simplified the solution of equations that are awkward or impossible in real numbers alone.**

This one sentence captures the historical justification and is a reliable answer on any exam question about why complex numbers matter.

---
**📌 Key Takeaways**
- The number system expanded each time old numbers could not solve a new class of problems.
- \(j\) is defined by \(j^2 = -1\), allowing equations like \(x^2 + 1 = 0\) to have solutions.
- Complex numbers can simplify a calculation even when the final answer is a real number.

*In the next section we will study how complex numbers are represented and manipulated algebraically.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6Im51bWJlcl9zeXN0ZW1fZXhwYW5zaW9uX2xvZ2ljIiwibGFiZWwiOiJXaHkgdGhlIG51bWJlciBzeXN0ZW0gZXhwYW5kcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBpcyB0aGUgbWFpbiBoaXN0b3JpY2FsIHBhdHRlcm4gZGVzY3JpYmVkIGluIHRoaXMgc2VjdGlvbj8iLCJvcHRpb25zIjpbIkEuIE5ldyBudW1iZXIgdHlwZXMgd2VyZSBpbnZlbnRlZCBtYWlubHkgdG8gbWFrZSBub3RhdGlvbiBsb29rIGNsZWFuZXIuIiwiQi4gVGhlIG51bWJlciBzeXN0ZW0gd2FzIGV4dGVuZGVkIHdoZW5ldmVyIG9sZGVyIG51bWJlcnMgY291bGQgbm90IGhhbmRsZSBuZXcgcHJvYmxlbXMuIiwiQy4gQ29tcGxleCBudW1iZXJzIHJlcGxhY2VkIHJlYWwgbnVtYmVycyBiZWNhdXNlIHJlYWwgbnVtYmVycyB3ZXJlIGluY29ycmVjdC4iLCJELiBNYXRoZW1hdGljaWFucyBhY2NlcHRlZCBhbGwgbmV3IG51bWJlcnMgaW1tZWRpYXRlbHkgd2l0aG91dCByZXNpc3RhbmNlLiJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IlRoZSBzZWN0aW9uJ3MgY2VudHJhbCBpZGVhIGlzIHRoYXQgdGhlIG51bWJlciBzeXN0ZW0ga2VwdCBicm9hZGVuaW5nIHdoZW4gZWFybGllciBudW1iZXIgc2V0cyB3ZXJlIG5vdCBlbm91Z2ggZm9yIG1lYXN1cmVtZW50IG9yIGVxdWF0aW9uIHNvbHZpbmcuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIG1vdGl2YXRpb24gd2FzIHByb2JsZW0tc29sdmluZyBwb3dlciwgbm90IGNvc21ldGljIG5vdGF0aW9uLiIsIkMiOiJSZWFsIG51bWJlcnMgcmVtYWluIHZhbGlkOyBjb21wbGV4IG51bWJlcnMgZXh0ZW5kIHRoZW0uIiwiRCI6IlRoZSBoaXN0b3J5IGRlc2NyaWJlZCBzdHJvbmcgcmVzaXN0YW5jZSB0byBpcnJhdGlvbmFsLCBuZWdhdGl2ZSwgYW5kIGNvbXBsZXggbnVtYmVycy4ifSwiaGludCI6IkZvY3VzIG9uIHRoZSByZXBlYXRlZCByZWFzb24gZWFjaCBuZXcgbnVtYmVyIHR5cGUgYXBwZWFyZWQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBlcXVhdGlvbiBpbiB0aGUgc2VjdGlvbiBpcyB1c2VkIHRvIHNob3cgd2h5IG5lZ2F0aXZlIG51bWJlcnMgYmVjYW1lIG5lY2Vzc2FyeT8iLCJvcHRpb25zIjpbIkEuIFxcKHheMiArIDEgPSAwXFwpIiwiQi4gXFwoeF4zIC0gMTV4IC0gNCA9IDBcXCkiLCJDLiBcXCh4ICsgNSA9IDBcXCkiLCJELiBcXChqXjIgPSAtMVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSB0ZXh0IHVzZXMgXFwoeCArIDUgPSAwXFwpIHRvIGlsbHVzdHJhdGUgdGhhdCBhbGxvd2luZyBuZWdhdGl2ZSBudW1iZXJzIG1ha2VzIHN1Y2ggZXF1YXRpb25zIHNvbHZhYmxlLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoaXMgbW90aXZhdGVzIGNvbXBsZXggbnVtYmVycywgbm90IG5lZ2F0aXZlIG51bWJlcnMuIiwiQiI6IlRoaXMgaXMgdGhlIENhcmRhbm8gZXhhbXBsZSBzaG93aW5nIGNvbXBsZXggaW50ZXJtZWRpYXRlcy4iLCJEIjoiVGhpcyBkZWZpbmVzIFxcKGpcXCkgYWZ0ZXIgY29tcGxleCBudW1iZXJzIGFyZSBpbnRyb2R1Y2VkLiJ9LCJoaW50IjoiVGhpbmsgb2YgdGhlIGVhcmxpZXN0IG5ldyBudW1iZXIgdHlwZSBpbnRyb2R1Y2VkIHRvIHNvbHZlIGFuIGVxdWF0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoibWVhbmluZ19vZl9qIiwibGFiZWwiOiJEZWZpbml0aW9uIGFuZCB1c2Ugb2YgaiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2h5IGRvIGVuZ2luZWVycyB1c3VhbGx5IHdyaXRlIFxcKGpcXCkgaW5zdGVhZCBvZiBcXChpXFwpIGZvciB0aGUgc3F1YXJlIHJvb3Qgb2YgXFwoLTFcXCk/Iiwib3B0aW9ucyI6WyJBLiBCZWNhdXNlIFxcKGpcXCkgaXMgbWF0aGVtYXRpY2FsbHkgbW9yZSBhY2N1cmF0ZSB0aGFuIFxcKGlcXCkiLCJCLiBCZWNhdXNlIFxcKGlcXCkgY2Fubm90IGJlIHNxdWFyZWQiLCJDLiBUbyBhdm9pZCBjb25mdXNpb24gd2l0aCBcXChpXFwpIHVzZWQgZm9yIGVsZWN0cmljYWwgY3VycmVudCIsIkQuIEJlY2F1c2UgR2F1c3MgcmVxdWlyZWQgdGhpcyBub3RhdGlvbiJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBzZWN0aW9uIGV4cGxpY2l0bHkgc3RhdGVzIHRoYXQgZW5naW5lZXJzIHVzZSBcXChqXFwpIHRvIGF2b2lkIGNvbmZ1c2lvbiB3aXRoIFxcKGlcXCksIHdoaWNoIGlzIG9mdGVuIHVzZWQgZm9yIGN1cnJlbnQuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiXFwoaVxcKSBhbmQgXFwoalxcKSByZXByZXNlbnQgdGhlIHNhbWUgbWF0aGVtYXRpY2FsIGlkZWEgaGVyZS4iLCJCIjoiXFwoaVxcKSBjYW4gYmUgc3F1YXJlZDsgXFwoaV4yID0gLTFcXCkuIiwiRCI6IlRoaXMgaXMgYSBwcmFjdGljYWwgZW5naW5lZXJpbmcgY29udmVudGlvbiwgbm90IGEgcnVsZSBpbXBvc2VkIGJ5IEdhdXNzLiJ9LCJoaW50IjoiVGhpcyBpcyBhIG5vdGF0aW9uIGNob2ljZSwgbm90IGEgZGlmZmVyZW50IGNvbmNlcHQuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBcXChqXFwpIGlzIGRlZmluZWQgc28gdGhhdCBcXChqID0gLTFcXCkiLCJCLiBcXChqXFwpIGlzIGRlZmluZWQgc28gdGhhdCBcXChqXjIgPSAtMVxcKSIsIkMuIFxcKGpcXCkgaXMgYW55IG5lZ2F0aXZlIG51bWJlciIsIkQuIFxcKGpcXCkgaXMgb25seSB1c2VmdWwgaW4gZ2VvbWV0cnksIG5vdCBhbGdlYnJhIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGRlZmluaW5nIHByb3BlcnR5IGlzIFxcKGpeMiA9IC0xXFwpLiBUaGF0IGlzIHdoYXQgYWxsb3dzIHNxdWFyZSByb290cyBvZiBuZWdhdGl2ZSBudW1iZXJzIHRvIGJlIGV4cHJlc3NlZC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJcXChqXFwpIGl0c2VsZiBpcyBub3QgZXF1YWwgdG8gXFwoLTFcXCkuIiwiQyI6IlxcKGpcXCkgaXMgYSBzcGVjaWZpYyBzeW1ib2wgd2l0aCBhIHNwZWNpZmljIGFsZ2VicmFpYyBwcm9wZXJ0eS4iLCJEIjoiVGhlIGhpc3RvcmljYWwgZXhhbXBsZXMgaW4gdGhpcyBzZWN0aW9uIGFyZSBhbGdlYnJhaWMuIn0sImhpbnQiOiJMb29rIGZvciB0aGUgZGVmaW5pbmcgZXF1YXRpb24sIG5vdCBhIHZhZ3VlIGRlc2NyaXB0aW9uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiY29tcGxleF9pbnRlcm1lZGlhdGVfcmVhbF9yZXN1bHQiLCJsYWJlbCI6IkNvbXBsZXggbnVtYmVycyBhcyBhbiBpbnRlcm1lZGlhdGUgc3RlcCB0byBhIHJlYWwgYW5zd2VyIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGF0IGlzIHRoZSBtYWluIGxlc3NvbiBvZiB0aGUgQ2FyZGFubyBleGFtcGxlIGluIHRoaXMgc2VjdGlvbj8iLCJvcHRpb25zIjpbIkEuIElmIGEgY2FsY3VsYXRpb24gY29udGFpbnMgYSBzcXVhcmUgcm9vdCBvZiBhIG5lZ2F0aXZlIG51bWJlciwgdGhlIG9yaWdpbmFsIGVxdWF0aW9uIGhhcyBubyByZWFsIHNvbHV0aW9uLiIsIkIuIENvbXBsZXggbnVtYmVycyBtYXkgYXBwZWFyIGR1cmluZyB0aGUgY2FsY3VsYXRpb24gZXZlbiB3aGVuIHRoZSBmaW5hbCBzb2x1dGlvbiBpcyByZWFsLiIsIkMuIEN1YmljIGVxdWF0aW9ucyBjYW4gb25seSBiZSBzb2x2ZWQgZ2VvbWV0cmljYWxseS4iLCJELiBDb21wbGV4IG51bWJlcnMgYXJlIHVubmVjZXNzYXJ5IG9uY2UgbmVnYXRpdmUgbnVtYmVycyBhcmUgYWNjZXB0ZWQuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhhdCBpcyB0aGUgZXhhY3QgaGlzdG9yaWNhbCBwYXlvZmY6IHRoZSBkZXJpdmF0aW9uIG1heSBwYXNzIHRocm91Z2ggY29tcGxleCBudW1iZXJzIGV2ZW4gdGhvdWdoIHRoZSBmaW5hbCBhbnN3ZXIgaXMgcmVhbC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgZXhhbXBsZSBjb250cmFkaWN0cyB0aGlzIGNsYWltIGJ5IHByb2R1Y2luZyBhIHJlYWwgYW5zd2VyLiIsIkMiOiJUaGUgc2VjdGlvbiBkaXNjdXNzZXMgYW4gYWxnZWJyYWljIGZvcm11bGEsIG5vdCBnZW9tZXRyeS1vbmx5IG1ldGhvZHMuIiwiRCI6Ik5lZ2F0aXZlIG51bWJlcnMgYWxvbmUgd2VyZSBub3QgZW5vdWdoLiJ9LCJoaW50IjoiU2VwYXJhdGUgd2hhdCBhcHBlYXJzIGluIHRoZSBtaWRkbGUgb2YgdGhlIGNvbXB1dGF0aW9uIGZyb20gdGhlIGZpbmFsIGFuc3dlci4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkluIHRoZSBDb3VudHJ5IFggLyBDb3VudHJ5IFkgYW5hbG9neSwgd2hhdCBkb2VzIHRyYXZlbGluZyB0aHJvdWdoIENvdW50cnkgWSByZXByZXNlbnQ/Iiwib3B0aW9ucyI6WyJBLiBNYWtpbmcgdGhlIHByb2JsZW0gbW9yZSBjb21wbGljYXRlZCBvbiBwdXJwb3NlIiwiQi4gUmVwbGFjaW5nIHRoZSBvcmlnaW5hbCByZWFsIHByb2JsZW0gd2l0aCBhIGRpZmZlcmVudCBwaHlzaWNhbCBwcm9ibGVtIiwiQy4gVXNpbmcgY29tcGxleCBudW1iZXJzIGFzIGFuIGludGVybWVkaWF0ZSByb3V0ZSB0aGF0IGNhbiBzaW1wbGlmeSB0aGUgd29yayIsIkQuIEF2b2lkaW5nIGFsbCBhbGdlYnJhaWMgbWV0aG9kcyJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlRoZSBhbmFsb2d5IHNheXMgdGhhdCBldmVuIGlmIHRoZSB0cmlwIHN0YXJ0cyBhbmQgZW5kcyBpbiB0aGUgcmVhbC1udW1iZXIgd29ybGQsIHBhc3NpbmcgdGhyb3VnaCB0aGUgbGFyZ2VyIGNvbXBsZXgtbnVtYmVyIHdvcmxkIGNhbiBiZSBzaG9ydGVyIGFuZCBlYXNpZXIuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHBvaW50IGlzIHJlZHVjZWQgd29yaywgbm90IGV4dHJhIGNvbXBsZXhpdHkuIiwiQiI6IlRoZSB1bmRlcmx5aW5nIHByb2JsZW0gcmVtYWlucyB0aGUgc2FtZS4iLCJEIjoiVGhlIGFuYWxvZ3kgc3VwcG9ydHMgYWxnZWJyYWljIHNpbXBsaWZpY2F0aW9uLCBub3QgYXZvaWRhbmNlLiJ9LCJoaW50IjoiVGhpbmsgJ3Nob3J0ZXIgcm91dGUsJyBub3QgJ2RpZmZlcmVudCBkZXN0aW5hdGlvbi4nIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6Im9wZW5haS9ncHQtNS40LWltYWdlLTIiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX1dfQ==" style="display:none;"></div>%%KC_END%%
