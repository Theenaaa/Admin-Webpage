import React, { useState } from "react";
import {
  Search,
  Upload,
  Edit,
  Trash2,
  Eye,
  Download,
  Box,
  Image as ImageIcon,
  Video,
  Filter,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Thumbnails – using Jharkhand destination images
import dassamImg from "@/assets/destinations/dassam.jpg";
import hundruImg from "@/assets/destinations/hundru.jpg";
import netarhatImg from "@/assets/destinations/netarhat.jpg";
import betlaImg from "@/assets/destinations/betla.jpg";
import patratuImg from "@/assets/destinations/patratu.webp";

const assets = [
  {
    id: 1,
    name: "Dassam Falls 3D Terrain Model",
    type: "3D Model",
    destination: "Dassam Falls, Ranchi",
    fileSize: "48 MB",
    format: "GLB",
    uploadDate: "2025-10-05",
    lastUpdated: "2025-10-12",
    uploadedBy: "AR Studio – Ranchi",
    downloads: 620,
    status: "active",
    views: 2100,
    thumbnail: dassamImg,
  },
  {
    id: 2,
    name: "Hundru Falls VR Trail",
    type: "VR Experience",
    destination: "Hundru Falls, Ranchi",
    fileSize: "132 MB",
    format: "Unity",
    uploadDate: "2025-09-18",
    lastUpdated: "2025-10-01",
    uploadedBy: "Tourism Innovation Cell",
    downloads: 480,
    status: "active",
    views: 1870,
    thumbnail: hundruImg,
  },
  {
    id: 3,
    name: "Netarhat Sunset AR Overlay",
    type: "AR Asset",
    destination: "Netarhat, Latehar",
    fileSize: "32 MB",
    format: "USDZ",
    uploadDate: "2025-09-10",
    lastUpdated: "2025-09-25",
    uploadedBy: "Netarhat Experience Lab",
    downloads: 390,
    status: "active",
    views: 1340,
    thumbnail: netarhatImg,
  },
  {
    id: 4,
    name: "Betla Safari 360° Video",
    type: "360° Video",
    destination: "Betla National Park, Latehar",
    fileSize: "210 MB",
    format: "MP4",
    uploadDate: "2025-08-28",
    lastUpdated: "2025-09-15",
    uploadedBy: "Wildlife Media Team",
    downloads: 720,
    status: "active",
    views: 2560,
    thumbnail: betlaImg,
  },
  {
    id: 5,
    name: "Patratu Valley AR Markers",
    type: "AR Asset",
    destination: "Patratu Valley, Ramgarh",
    fileSize: "18 MB",
    format: "PNG",
    uploadDate: "2025-08-20",
    lastUpdated: "2025-09-05",
    uploadedBy: "Ramgarh Tourism Cell",
    downloads: 260,
    status: "processing",
    views: 980,
    thumbnail: patratuImg,
  },
];

export default function Assets() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [previewAsset, setPreviewAsset] = useState(null);

  const getTypeColor = (type) => {
    switch (type) {
      case "3D Model":
        return "bg-blue-50 text-blue-700 border border-blue-100";
      case "VR Experience":
        return "bg-purple-50 text-purple-700 border border-purple-100";
      case "AR Asset":
        return "bg-emerald-50 text-emerald-700 border border-emerald-100";
      case "360° Video":
        return "bg-orange-50 text-orange-700 border border-orange-100";
      default:
        return "bg-slate-50 text-slate-700 border border-slate-100";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "3D Model":
        return <Box className="w-4 h-4" />;
      case "VR Experience":
        return <Eye className="w-4 h-4" />;
      case "AR Asset":
        return <ImageIcon className="w-4 h-4" />;
      case "360° Video":
        return <Video className="w-4 h-4" />;
      default:
        return <Box className="w-4 h-4" />;
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case "active":
        return "success";
      case "processing":
        return "warning";
      case "archived":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const filteredAssets = assets.filter((a) => {
    const term = searchTerm.toLowerCase().trim();
    const matchesSearch =
      term === "" ||
      a.name.toLowerCase().includes(term) ||
      a.destination.toLowerCase().includes(term) ||
      a.type.toLowerCase().includes(term);

    const matchesType = typeFilter === "all" ? true : a.type === typeFilter;
    const matchesStatus =
      statusFilter === "all" ? true : a.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const totalDownloadsK =
    assets.reduce((sum, a) => sum + a.downloads, 0) / 1000;
  const totalViewsK = assets.reduce((sum, a) => sum + a.views, 0) / 1000;
  const activeAssets = assets.filter((a) => a.status === "active").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            AR/VR Asset Management
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage immersive digital experiences for Jharkhand tourism
            destinations.
          </p>
        </div>
        <Button
          className="
            gap-2 rounded-2xl px-5 py-2.5
            bg-indigo-600 text-white
            shadow-[0_10px_24px_rgba(79,70,229,0.45)]
            hover:bg-indigo-700 hover:shadow-[0_14px_30px_rgba(79,70,229,0.6)]
            border border-indigo-500/80
            flex items-center
          "
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <Upload className="w-4 h-4" />
          <span className="font-semibold tracking-wide text-xs uppercase">
            Upload AR/VR Asset
          </span>
        </Button>
      </div>

      {/* Stats cards (consistent with Events/Destinations) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card className="glass-card border-border/70 bg-gradient-to-br from-slate-50 to-slate-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Total Assets
                </p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">
                  {assets.length}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-900/5">
                <Box className="w-6 h-6 text-slate-900" />
              </div>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              3D models, AR overlays, VR tours and more.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/70 bg-gradient-to-br from-emerald-50 to-emerald-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-emerald-800/80">
                  Active Assets
                </p>
                <p className="mt-2 text-3xl font-semibold text-emerald-800">
                  {activeAssets}
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs text-emerald-900/80">
              Ready to serve in citizen-facing apps.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/70 bg-gradient-to-br from-indigo-50 to-indigo-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-indigo-800/80">
                  Total Downloads
                </p>
                <p className="mt-2 text-3xl font-semibold text-indigo-800">
                  {totalDownloadsK.toFixed(1)}K
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-900/5">
                <Download className="w-6 h-6 text-indigo-800" />
              </div>
            </div>
            <p className="mt-3 text-xs text-indigo-900/80">
              Combined downloads across all assets.
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card border-border/70 bg-gradient-to-br from-amber-50 to-amber-100/60 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-amber-800/80">
                  Total Views
                </p>
                <p className="mt-2 text-3xl font-semibold text-amber-800">
                  {totalViewsK.toFixed(1)}K
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-900/5">
                <Eye className="w-6 h-6 text-amber-800" />
              </div>
            </div>
            <p className="mt-3 text-xs text-amber-900/80">
              View count from all client applications.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Search + Filters */}
      <Card className="glass-card border-border bg-background/60">
        <CardContent className="p-4 md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by asset, destination, or type..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-muted/40 border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800/40 transition-all placeholder:text-muted-foreground"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Type
                </span>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="text-sm bg-muted/40 border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800/40"
                >
                  <option value="all">All</option>
                  <option value="3D Model">3D Model</option>
                  <option value="VR Experience">VR Experience</option>
                  <option value="AR Asset">AR Asset</option>
                  <option value="360° Video">360° Video</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Status
                </span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="text-sm bg-muted/40 border border-border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-800/10 focus:border-slate-800/40"
                >
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="processing">Processing</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assets Table */}
      <Card className="glass-card border-border bg-background/70">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">Preview</th>
                  <th className="py-3 px-4 text-left font-semibold">Name</th>
                  <th className="py-3 px-4 text-left font-semibold">Type</th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Destination
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">Format</th>
                  <th className="py-3 px-4 text-left font-semibold">Size</th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Downloads
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">Status</th>
                  <th className="py-3 px-4 text-right font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredAssets.length === 0 ? (
                  <tr>
                    <td
                      colSpan={9}
                      className="py-6 px-4 text-center text-sm text-muted-foreground"
                    >
                      No assets match the current search or filters.
                    </td>
                  </tr>
                ) : (
                  filteredAssets.map((asset) => (
                    <tr
                      key={asset.id}
                      className="hover:bg-muted/40 transition-colors"
                    >
                      {/* Preview */}
                      <td className="py-3 px-4">
                        <div className="h-12 w-20 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                          {asset.thumbnail ? (
                            <img
                              src={asset.thumbnail}
                              alt={asset.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <ImageIcon className="w-5 h-5 text-muted-foreground" />
                          )}
                        </div>
                      </td>

                      {/* Name + meta */}
                      <td className="py-3 px-4 w-[260px]">
  <div className="flex flex-col gap-1">
    <p className="font-semibold text-[15px] text-foreground line-clamp-1">
      {asset.name}
    </p>

    <p className="text-[11px] text-muted-foreground line-clamp-1">
      Uploaded by {asset.uploadedBy} • {asset.lastUpdated}
    </p>
  </div>
</td>


                      {/* Type */}
                      <td className="py-3 px-4">
                        <Badge
                          className={`${getTypeColor(
                            asset.type
                          )} text-[11px] font-medium inline-flex items-center gap-1`}
                        >
                          {getTypeIcon(asset.type)}
                          <span>{asset.type}</span>
                        </Badge>
                      </td>

                      {/* Destination */}
                      <td className="py-3 px-4">
                        <span className="text-xs text-foreground">
                          {asset.destination}
                        </span>
                      </td>

                      {/* Format */}
                      <td className="py-3 px-4">
                        <span className="text-xs font-medium text-foreground">
                          {asset.format}
                        </span>
                      </td>

                      {/* Size */}
                      <td className="py-3 px-4">
                        <span className="text-xs text-foreground">
                          {asset.fileSize}
                        </span>
                      </td>

                      {/* Downloads */}
                      <td className="py-3 px-4">
                        <span className="text-xs text-foreground">
                          {asset.downloads.toLocaleString()}
                        </span>
                      </td>

                      {/* Status */}
                      <td className="py-3 px-4">
                        <Badge
                          variant={getStatusVariant(asset.status)}
                          className="text-[11px] capitalize"
                        >
                          {asset.status}
                        </Badge>
                      </td>

                      {/* Actions */}
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            onClick={() => setPreviewAsset(asset)}
                            className="
                              bg-emerald-600 text-white rounded-lg px-4 py-1.5
                              hover:bg-emerald-700
                              shadow-[0_4px_12px_rgba(16,185,129,0.4)]
                              flex items-center gap-1
                            "
                            size="sm"
                          >
                            <Eye className="w-4 h-4" />
                            View Model
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="destructive"
                            size="icon"
                            className="h-8 w-8 rounded-lg"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Preview Modal */}
      {previewAsset && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl w-[90%] max-w-3xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setPreviewAsset(null)}
              className="absolute top-3 right-3 text-slate-600 hover:text-black text-lg"
            >
              ✕
            </button>

            {/* Header */}
            <h2 className="text-xl font-semibold mb-4">
              Preview — {previewAsset.name}
            </h2>

            {/* Thumbnail */}
            <div className="w-full h-64 bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center">
              {previewAsset.thumbnail && (
                <img
                  src={previewAsset.thumbnail}
                  alt={previewAsset.name}
                  className="h-full object-cover"
                />
              )}
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              AR/VR/3D viewer can be integrated here based on asset type (
              <span className="font-medium">{previewAsset.type}</span>). Use
              this space to embed a 3D canvas, 360° player, or WebXR viewer.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
