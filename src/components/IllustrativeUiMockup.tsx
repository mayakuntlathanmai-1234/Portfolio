"use client";

import React, { useState } from "react";
import {
  Video,
  ShieldCheck,
  Activity,
  FileText,
  Send,
  MapPin,
  Award,
  Server,
  Cpu,
  Database,
  ArrowRight,
  UploadCloud,
  Search,
  Bot,
  Download,
  Lock,
  Radio,
} from "lucide-react";

interface MockupProps {
  type: "healthcare" | "environmental" | "microservices" | "agentic-ai";
}

export default function IllustrativeUiMockup({ type }: MockupProps) {
  // Healthcare mockup state
  const [activeTab, setActiveTab] = useState<"consultation" | "records">("consultation");
  const [inCall, setInCall] = useState(true);

  // Environmental mockup state
  const [reportSubmitted, setReportSubmitted] = useState(false);

  // AI Workbench mockup state
  const [query, setQuery] = useState("What is the data security policy for local document storage?");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<string | null>(
    "Based on retrieved local document chunks (ChromaDB similarity: 0.94): Sensitive documents are indexed entirely on-premise using SentenceTransformers embeddings. No external API endpoints or cloud LLMs are contacted; Qwen2 runs locally via Ollama."
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      setSearchResult(
        `Retrieved answer for "${query}": Local document RAG pipeline retrieved 3 matching passages from ChromaDB. Qwen2:0.5b synthesized response with zero network latency.`
      );
      setIsSearching(false);
    }, 600);
  };

  return (
    <div className="w-full rounded-xl bg-[#f4f2ee] border border-[#e2dfd7] overflow-hidden">
      {/* Mockup Header Toolbar */}
      <div className="px-4 py-2.5 bg-[#ffffff] border-b border-[#e2dfd7] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[11px] font-mono text-[#77756f] ml-2">
            localhost:3000/{type}
          </span>
        </div>
        <div className="px-2.5 py-0.5 rounded-full bg-[#f4f2ee] text-[#0d0d0d] text-[10px] font-mono font-semibold uppercase tracking-wider border border-[#e2dfd7]">
          Illustrative UI
        </div>
      </div>

      {/* Mockup Content Area */}
      <div className="p-4 sm:p-6 min-h-[280px]">
        {/* 1. CARESTREAM HEALTHCARE MOCKUP */}
        {type === "healthcare" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between bg-[#ffffff] p-3 rounded-lg border border-[#e2dfd7]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  CS
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0d0d0d]">CareStream Consultation Room</h4>
                  <p className="text-[10px] text-[#77756f]">JWT Auth: Validated • STOMP WebSocket: Connected</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-mono font-semibold border border-emerald-200">
                  <Radio className="w-3 h-3 animate-pulse" />
                  WebRTC Live
                </span>
              </div>
            </div>

            {/* Video Call Simulation Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Doctor Feed */}
              <div className="relative aspect-video rounded-lg bg-[#0d0d0d] overflow-hidden flex items-center justify-center border border-[#e2dfd7]">
                <div className="text-center p-4">
                  <Video className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <span className="text-xs font-medium text-[#ffffff]">Dr. Consultation Stream (Doctor)</span>
                  <span className="block text-[10px] text-gray-400 mt-1">1080p • 60 FPS • WebRTC Peer</span>
                </div>
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#0d0d0d]/80 text-[#ffffff] text-[10px]">
                  Dr. M. Thanmai (Cardiologist)
                </span>
              </div>

              {/* Patient Feed */}
              <div className="relative aspect-video rounded-lg bg-[#222222] overflow-hidden flex items-center justify-center border border-[#e2dfd7]">
                <div className="text-center p-4">
                  <Activity className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <span className="text-xs font-medium text-[#ffffff]">Patient Live Stream</span>
                  <span className="block text-[10px] text-gray-400 mt-1">Vitals Monitored via Sensor API</span>
                </div>
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#0d0d0d]/80 text-[#ffffff] text-[10px]">
                  Patient Room #204
                </span>
              </div>
            </div>
          </div>
        )}

        {/* 2. GREENLOOP ENVIRONMENTAL MOCKUP */}
        {type === "environmental" && (
          <div className="space-y-4">
            <div className="bg-[#ffffff] p-4 rounded-lg border border-[#e2dfd7]">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-[#0d0d0d] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>GreenLoop Environmental Issue Reporter</span>
                </h4>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  +50 Reward EcoPoints
                </span>
              </div>

              {!reportSubmitted ? (
                <div className="space-y-3">
                  <div className="p-3 bg-[#f4f2ee] rounded text-xs text-[#0d0d0d]">
                    <span className="font-semibold">Location:</span> Dharmavaram Ward 4 • <span className="font-semibold">Issue:</span> Plastic Waste &amp; Drain Blockage
                  </div>
                  <button
                    onClick={() => setReportSubmitted(true)}
                    className="w-full py-2 bg-[#0d0d0d] text-[#ffffff] text-xs font-semibold rounded hover:bg-[#222222] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Community Report</span>
                  </button>
                </div>
              ) : (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-center text-xs text-emerald-800 space-y-1">
                  <Award className="w-5 h-5 mx-auto text-emerald-600 mb-1" />
                  <div className="font-bold">Report Submitted &amp; Verified!</div>
                  <div className="text-[11px] text-emerald-700">Digital EcoCertificate generated for community participation.</div>
                  <button
                    onClick={() => setReportSubmitted(false)}
                    className="mt-2 text-[10px] underline font-semibold"
                  >
                    Submit another report
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. URBAN MOBILITY MICROSERVICES MOCKUP */}
        {type === "microservices" && (
          <div className="space-y-3">
            <div className="text-xs font-bold text-[#0d0d0d] mb-2 flex items-center justify-between">
              <span>Urban Mobility Microservices Topology</span>
              <span className="text-[10px] font-mono text-[#77756f]">Netflix Eureka Discovery</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              <div className="p-3 bg-[#ffffff] rounded border border-[#e2dfd7] text-center">
                <Server className="w-4 h-4 text-purple-600 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0d0d0d]">API Gateway</div>
                <div className="text-[9px] text-[#77756f]">Port 8080</div>
              </div>

              <div className="p-3 bg-[#ffffff] rounded border border-[#e2dfd7] text-center">
                <ShieldCheck className="w-4 h-4 text-blue-600 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0d0d0d]">Auth Service</div>
                <div className="text-[9px] text-[#77756f]">JWT Tokens</div>
              </div>

              <div className="p-3 bg-[#ffffff] rounded border border-[#e2dfd7] text-center">
                <Cpu className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0d0d0d]">Ride Service</div>
                <div className="text-[9px] text-[#77756f]">Driver Match</div>
              </div>

              <div className="p-3 bg-[#ffffff] rounded border border-[#e2dfd7] text-center">
                <Database className="w-4 h-4 text-amber-600 mx-auto mb-1" />
                <div className="text-[11px] font-bold text-[#0d0d0d]">Payment Service</div>
                <div className="text-[9px] text-[#77756f]">Billing Ledger</div>
              </div>
            </div>
          </div>
        )}

        {/* 4. SOVEREIGN AGENTIC AI WORKBENCH MOCKUP */}
        {type === "agentic-ai" && (
          <div className="space-y-4">
            <div className="bg-[#ffffff] p-4 rounded-lg border border-[#e2dfd7] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-[#0d0d0d]" />
                  <h4 className="text-xs font-bold text-[#0d0d0d]">Local Air-Gapped RAG Query Engine</h4>
                </div>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <Lock className="w-3 h-3" />
                  100% Offline (Ollama / Qwen2)
                </span>
              </div>

              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-[#f4f2ee] border border-[#e2dfd7] rounded text-xs text-[#0d0d0d] focus:outline-none focus:border-[#0d0d0d]"
                  placeholder="Ask a question about uploaded local documents..."
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="px-3 py-1.5 bg-[#0d0d0d] text-[#ffffff] text-xs font-semibold rounded hover:bg-[#222222] transition-colors flex items-center gap-1"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Query</span>
                </button>
              </form>

              {searchResult && (
                <div className="p-3 bg-[#f4f2ee] rounded border border-[#e2dfd7] text-xs text-[#0d0d0d] space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#77756f]">
                    <span>ChromaDB Vector Retrieval Match</span>
                    <span>Model: qwen2:0.5b</span>
                  </div>
                  <p className="leading-relaxed">{searchResult}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
